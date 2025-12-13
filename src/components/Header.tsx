import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('home')} className="text-2xl font-bold" style={{ color: '#800020' }}>
            S.R. ENTERPRISES
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => onNavigate('products')} className="text-sm font-medium hover:text-maroon">SHOP</button>
            <button onClick={() => onNavigate('size-guide')} className="text-sm font-medium hover:text-maroon">SIZE GUIDE</button>
            <button onClick={() => onNavigate('about')} className="text-sm font-medium hover:text-maroon">ABOUT</button>
            <button onClick={() => onNavigate('contact')} className="text-sm font-medium hover:text-maroon">CONTACT</button>

            {isAuthenticated ? (
              <button onClick={signOut} className="text-sm font-medium hover:text-maroon">LOGOUT</button>
            ) : (
              <button onClick={() => onNavigate('login')} className="text-sm font-medium hover:text-maroon">LOGIN</button>
            )}

            <button onClick={() => onNavigate('cart')} className="relative text-gray-700">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: '#800020' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-1 pb-4">
            <button onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-gray-100">SHOP</button>
            <button onClick={() => { onNavigate('size-guide'); setMobileMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-gray-100">SIZE GUIDE</button>
            <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-gray-100">ABOUT</button>
            <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-gray-100">CONTACT</button>
            <button onClick={() => { onNavigate('cart'); setMobileMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-gray-100">CART {cartCount > 0 && `(${cartCount})`}</button>
          </div>
        </div>
      )}
    </header>
  );
}
