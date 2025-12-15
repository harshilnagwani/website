import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { supabase } from '../lib/supabase';
import { CheckCircle } from 'lucide-react';

interface CheckoutPageProps {
  onOrderComplete: (orderId: string) => void;
}

export default function CheckoutPage({ onOrderComplete }: CheckoutPageProps) {
  const { cart, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', paymentMethod: 'COD' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const tax = cartTotal * 0.18;
      const shipping = cartTotal > 2000 ? 0 : 100;
      const total = cartTotal + tax + shipping;
      const orderNum = `ORD${Date.now()}`;
      const orderItems = cart.map(item => ({ product_id: item.product_id, product_name: item.product?.name || '', variant_id: item.variant_id, size: item.variant?.size || '', color: item.variant?.color || 'default', quantity: item.quantity, price: item.product?.discount_price || item.product?.base_price || 0, image: item.product?.images?.[0] || '' }));

      const { error } = await supabase.from('orders').insert([{
        order_number: orderNum,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        delivery_address: { full_name: formData.name, phone: formData.phone, address_line: formData.address, city: formData.city, state: formData.state, pincode: formData.pincode },
        items: orderItems,
        subtotal: cartTotal,
        tax,
        shipping,
        discount: 0,
        total,
        status: 'Pending',
        payment_status: 'Unpaid',
        payment_method: formData.paymentMethod,
      }]);

      if (error) throw error;
      await clearCart();
      setOrderNumber(orderNum);
      setOrderPlaced(true);
    } catch (error) {
      alert('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  const tax = cartTotal * 0.18;
  const shipping = cartTotal > 2000 ? 0 : 100;
  const total = cartTotal + tax + shipping;

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-20 w-20 mx-auto text-green-500 mb-6" />
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Order Placed!</h2>
          <p className="text-lg font-semibold mb-6">Order #{orderNumber}</p>
          <button onClick={() => onOrderComplete(orderNumber)} className="w-full py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#800020' }}>
            Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#800020' }}>Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Delivery Information</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone (10 digits)" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <textarea placeholder="Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required className="px-4 py-2 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="State" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} required className="px-4 py-2 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Pincode" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} required className="px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Payment Method</h3>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer" style={formData.paymentMethod === 'COD' ? { borderColor: '#800020' } : {}}>
                    <input type="radio" name="payment" value="COD" checked={formData.paymentMethod === 'COD'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="mr-3" />
                    <div><p className="font-medium">Cash on Delivery</p><p className="text-sm text-gray-600">Pay on receipt</p></div>
                  </label>
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full mt-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50" style={{ backgroundColor: '#800020' }}>
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
