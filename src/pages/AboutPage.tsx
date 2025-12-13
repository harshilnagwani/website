export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
          About S.R. Enterprises
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              S.R. Enterprises is a premium destination for men's ethnic and formal wear, where tradition meets contemporary elegance. Founded with a passion for authentic Indian craftsmanship, we bring you the finest collection of Kurta Pajamas, Jodhpuri Sets, Blazers, and formal wear that celebrates your cultural heritage while keeping you effortlessly stylish.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every piece in our collection is carefully curated and crafted by artisans who understand the nuances of traditional tailoring. We believe that premium ethnic wear should be accessible, comfortable, and timelessly elegant.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide men with exceptional quality ethnic and formal wear that empowers them to express their cultural identity with confidence. We're committed to celebrating Indian traditions through modern tailoring and sustainable practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#800020' }}>Premium Quality</h3>
                <p className="text-gray-700">
                  We source the finest fabrics from trusted suppliers and work with experienced artisans to ensure every product meets our high standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#800020' }}>Perfect Fit</h3>
                <p className="text-gray-700">
                  With comprehensive size guides and custom tailoring options, we ensure you get the perfect fit every time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#800020' }}>Fast & Reliable</h3>
                <p className="text-gray-700">
                  Quick delivery across India, real-time order tracking, and excellent customer service are our promises to you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#800020' }}>Customer First</h3>
                <p className="text-gray-700">
                  Our 7-day return policy, expert styling advice, and 24/7 customer support ensure your complete satisfaction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Our Collections</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Kurta Pajama Collection</h3>
                <p className="text-gray-700">Traditional ethnic wear perfect for festivals, celebrations, and casual occasions. Available in classic and contemporary designs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Jodhpuri Sets</h3>
                <p className="text-gray-700">Regal and sophisticated formal wear ideal for weddings, celebrations, and formal events.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Blazers & Formal Wear</h3>
                <p className="text-gray-700">Modern formal blazers and multi-piece suits for the contemporary man who values style and elegance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Made-to-Order</h3>
                <p className="text-gray-700">Custom tailoring services to create your perfect ethnic wear according to your specifications and preferences.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Our Commitment</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We're committed to sustainability and ethical practices. We work with suppliers who share our values and ensure fair treatment of artisans and workers throughout our supply chain.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every order is carefully packed and dispatched with care to ensure your products arrive in perfect condition. We stand behind the quality of our products with our satisfaction guarantee.
            </p>
          </section>

          <section className="bg-cream rounded-lg p-8 text-center border-2" style={{ backgroundColor: '#FFFDD0', borderColor: '#FFD700' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Join Our Community</h2>
            <p className="text-gray-800 mb-6">
              Follow us on social media for exclusive offers, styling tips, and updates on new collections.
            </p>
            <a href="#" className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#800020' }}>
              Follow on Instagram
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}