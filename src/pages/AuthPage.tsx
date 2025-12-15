import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface AuthPageProps {
  onSuccess: () => void;
}

export default function AuthPage({ onSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (isLogin) {
        const result = await signIn(formData.email, formData.password);
        if (result.success) onSuccess();
        else alert(result.error);
      } else {
        const result = await signUp(formData.email, formData.password, formData.name, formData.phone);
        if (result.success) onSuccess();
        else alert(result.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#800020' }}>S.R. ENTERPRISES</h1>
          <p className="text-gray-600">{isLogin ? 'Welcome back! Sign in to your account' : 'Create your account to get started'}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex mb-6 border-b">
            <button onClick={() => setIsLogin(true)} className={`flex-1 pb-3 font-semibold transition-colors`} style={isLogin ? { borderColor: '#800020', borderBottomWidth: '2px', color: '#800020' } : { color: '#999' }}>
              Login
            </button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 pb-3 font-semibold transition-colors`} style={!isLogin ? { borderColor: '#800020', borderBottomWidth: '2px', color: '#800020' } : { color: '#999' }}>
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            )}
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            {!isLogin && (
              <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            )}
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            {!isLogin && (
              <input type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            )}
            <button type="submit" disabled={loading} className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50" style={{ backgroundColor: '#800020' }}>
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
