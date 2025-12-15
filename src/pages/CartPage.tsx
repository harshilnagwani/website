import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartPageProps {
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export default function CartPage({ onCheckout, onContinueShopping }: CartPageProps) {
  const { cart, loading, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#800020' }}></div></div>;
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <button onClick={onContinueShopping} className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#800020' }}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const tax = cartTotal * 0.18;
  const shipping = cartTotal > 2000 ? 0 : 100;
  const total = cartTotal + tax + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#800020' }}>Shopping Cart ({cart.length} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const product = item.product;
              const variant = item.variant;
              if (!product || !variant) return null;
              const price = product.discount_price || product.base_price;
              const itemTotal = price * item.quantity;
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
                  <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={product.images[0] || 'https://via.placeholder.com/150'} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-600">Size: {variant.size}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded border flex items-center justify-center">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded border flex items-center justify-center">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-lg font-bold" style={{ color: '#800020' }}>₹{itemTotal}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between"><span>Subtotal</span><span>₹{cartTotal}</span></div>
                <div className="flex justify-between"><span>Tax (18%)</span><span>₹{tax.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span style={{ color: '#800020' }}>₹{total}</span>
                </div>
              </div>
              <button onClick={onCheckout} className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 mb-3" style={{ backgroundColor: '#800020' }}>
                Proceed to Checkout
              </button>
              <button onClick={onContinueShopping} className="w-full py-3 rounded-lg font-semibold border-2" style={{ borderColor: '#800020', color: '#800020' }}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
