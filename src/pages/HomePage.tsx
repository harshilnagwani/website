import Hero from '../components/Hero';
import { CATEGORIES } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Hero onShopNow={() => onNavigate('products')} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onNavigate(`products?category=${encodeURIComponent(category)}`)}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(128,0,32,0.5)), url('https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                      {category}
                    </h3>
                    <p className="text-cream-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Collection
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#FFFDD0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
            Why Choose S.R. Enterprises
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#800020' }}>
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-700">Finest fabrics and traditional craftsmanship</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#800020' }}>
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Perfect Fit</h3>
              <p className="text-sm text-gray-700">Multiple sizes and custom tailoring available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#800020' }}>
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-700">Quick shipping across India</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#800020' }}>
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-700">7-day hassle-free return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}