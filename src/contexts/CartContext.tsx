import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { CartItem } from '../types';
import { useAuth } from './AuthContext';

interface CartContextType {
  cart: CartItem[];
  loading: boolean;
  addToCart: (productId: string, variantId: string, quantity: number) => Promise<void>;
  updateQuantity: (cartItemId: string, quantity: number) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { customer } = useAuth();

  const getSessionId = () => {
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  };

  useEffect(() => {
    loadCart();
  }, [customer]);

  const loadCart = async () => {
    try {
      setLoading(true);
      const identifier = customer?.id || getSessionId();
      const field = customer?.id ? 'customer_id' : 'session_id';

      const { data, error } = await supabase
        .from('cart')
        .select('*,product:products(*),variant:product_variants(*)')
        .eq(field, identifier);

      if (error) throw error;
      setCart(data || []);
    } catch (error) {
      console.error('Load cart error:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, variantId: string, quantity: number) => {
    try {
      const identifier = customer?.id || getSessionId();
      const field = customer?.id ? 'customer_id' : 'session_id';

      const existingItem = cart.find(
        item => item.product_id === productId && item.variant_id === variantId
      );

      if (existingItem) {
        await updateQuantity(existingItem.id, existingItem.quantity + quantity);
      } else {
        const insertData: any = {
          product_id: productId,
          variant_id: variantId,
          quantity
        };
        insertData[field] = identifier;

        const { error } = await supabase
          .from('cart')
          .insert([insertData]);

        if (error) throw error;
        await loadCart();
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      throw error;
    }
  };

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(cartItemId);
        return;
      }

      const { error } = await supabase
        .from('cart')
        .update({ quantity })
        .eq('id', cartItemId);

      if (error) throw error;
      await loadCart();
    } catch (error) {
      console.error('Update quantity error:', error);
      throw error;
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', cartItemId);

      if (error) throw error;
      await loadCart();
    } catch (error) {
      console.error('Remove from cart error:', error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      const identifier = customer?.id || getSessionId();
      const field = customer?.id ? 'customer_id' : 'session_id';

      const { error } = await supabase
        .from('cart')
        .delete()
        .eq(field, identifier);

      if (error) throw error;
      setCart([]);
    } catch (error) {
      console.error('Clear cart error:', error);
      throw error;
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => {
    const price = item.product?.discount_price || item.product?.base_price || 0;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}