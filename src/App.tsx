import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import SizeGuidePage from './pages/SizeGuidePage';
import SupportPage from './pages/SupportPage';
import ReturnsPage from './pages/ReturnsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleNavigate = (path: string) => {
    const [page, ...params] = path.split('?');
    setCurrentPage(page);

    if (params.length > 0) {
      const searchParams = new URLSearchParams(params[0]);
      if (searchParams.has('search')) {
        setSearchQuery(searchParams.get('search') || '');
      }
      if (searchParams.has('category')) {
        setCategoryFilter(searchParams.get('category') || '');
      }
    } else {
      setSearchQuery('');
      setCategoryFilter('');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return (
          <ProductsPage
            onViewProduct={(id) => {
              setSelectedProductId(id);
              setCurrentPage('product-detail');
            }}
            searchQuery={searchQuery}
            category={categoryFilter}
          />
        );
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage
            productId={selectedProductId}
            onBack={() => setCurrentPage('products')}
            onViewSizeGuide={() => setCurrentPage('size-guide')}
          />
        ) : null;
      case 'cart':
        return (
          <CartPage
            onCheckout={() => setCurrentPage('checkout')}
            onContinueShopping={() => setCurrentPage('products')}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            onOrderComplete={(orderId) => {
              setCurrentPage('home');
            }}
          />
        );
      case 'login':
        return (
          <AuthPage
            onSuccess={() => setCurrentPage('home')}
          />
        );
      case 'size-guide':
        return <SizeGuidePage />;
      case 'support':
        return <SupportPage />;
      case 'returns':
        return <ReturnsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
