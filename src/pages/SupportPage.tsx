import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
            Personalized Support Just For You
          </h1>
          <p className="text-xl text-gray-600">
            Have questions about our styles or orders? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <Mail className="h-12 w-12 mx-auto mb-4" style={{ color: '#800020' }} />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">We reply within 24 hours</p>
            <a href="mailto:support@srenterprises.com" className="text-sm font-semibold hover:underline" style={{ color: '#800020' }}>
              support@srenterprises.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <Phone className="h-12 w-12 mx-auto mb-4" style={{ color: '#800020' }} />
            <h3 className="text-xl font-semibold mb-2">Call for Help</h3>
            <p className="text-gray-600 text-sm mb-4">Customer care: 10 AM - 6 PM IST</p>
            <div className="space-y-2">
              <a href="tel:+919876543210" className="block text-sm font-semibold hover:underline" style={{ color: '#800020' }}>
                +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold hover:underline" style={{ color: '#25D366' }}>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: '#800020' }} />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-4">Experience our collection</p>
            <p className="text-sm font-semibold">
              123 Fashion Street
              <br />
              Mumbai, MH 400001
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <Sparkles className="h-12 w-12 mx-auto mb-4" style={{ color: '#800020' }} />
            <h3 className="text-xl font-semibold mb-2">Styling Help</h3>
            <p className="text-gray-600 text-sm mb-4">Expert fitting advice</p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: '#800020' }}>
              Get Advice
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#800020' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="group border-b pb-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What is your return policy?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                We offer a 7-day return window from the date of delivery. Products must be unworn, with tags attached, in original packaging. Contact our support team to initiate a return.
              </p>
            </details>

            <details className="group border-b pb-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>Do you offer custom tailoring?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! We offer custom tailoring services for made-to-order items. Select the "Custom" size option during checkout and contact us via WhatsApp or phone for measurements.
              </p>
            </details>

            <details className="group border-b pb-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>How long does delivery take?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Standard delivery takes 3-5 business days across India. Made-to-order items take 7-10 business days. We'll provide tracking information via email.
              </p>
            </details>

            <details className="group border-b pb-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What payment methods do you accept?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Currently, we accept Cash on Delivery (COD). Online payment options are coming soon.
              </p>
            </details>

            <details className="group border-b pb-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>How do I track my order?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                You'll receive an order confirmation email with a tracking number. You can use this to track your package with our logistics partner.
              </p>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>Are your products authentic?</span>
                <span className="text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-700">
                100% authentic! All products are sourced from authentic suppliers and are made with premium fabrics and traditional craftsmanship.
              </p>
            </details>
          </div>
        </div>

        <div className="bg-gradient-to-r from-maroon to-gray-900 rounded-lg p-8 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #800020 0%, #36454F 100%)' }}>
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">Our dedicated team is ready to help you anytime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Chat on WhatsApp
            </a>
            <a href="mailto:support@srenterprises.com" className="px-6 py-3 bg-white text-maroon rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#800020' }}>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}