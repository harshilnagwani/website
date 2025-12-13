import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#800020' }}>Contact Information</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#800020' }} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:support@srenterprises.com" className="text-gray-700 hover:text-maroon transition-colors">
                    support@srenterprises.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#800020' }} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-gray-700 hover:text-maroon transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 10 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#800020' }} />
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-700">
                    123 Fashion Street
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#25D366' }}>
                    W
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-xs text-gray-600">Chat with us instantly</p>
                  </div>
                </a>

                <a href="https://instagram.com/srenterprises" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#E4405F' }}>
                    I
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instagram</p>
                    <p className="text-xs text-gray-600">Follow us for updates</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#800020' }}>Send us a Message</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p className="text-gray-600">We've received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#800020' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#800020' }}>Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Monday - Friday</h3>
              <p className="text-gray-700">10:00 AM - 6:00 PM IST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Saturday</h3>
              <p className="text-gray-700">11:00 AM - 5:00 PM IST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sunday</h3>
              <p className="text-gray-700">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}