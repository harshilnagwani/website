export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
          Return & Exchange Policy
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Return Window</h2>
            <p className="text-gray-700 text-lg">
              <strong>7 days from delivery date</strong>
            </p>
            <p className="text-gray-600 mt-2">
              You have 7 days from the date you receive your order to initiate a return. No questions asked returns within this window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Return Conditions</h2>
            <p className="text-gray-600 mb-4">Products must meet all of the following conditions to be eligible for return:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-maroon font-bold">✓</span>
                <span>Product must be unworn and unused</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maroon font-bold">✓</span>
                <span>Original tags must be attached</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maroon font-bold">✓</span>
                <span>Must be in original packaging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maroon font-bold">✓</span>
                <span>No signs of wear, stains, or damage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maroon font-bold">✓</span>
                <span>All original accessories and components included</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Exchange Process</h2>
            <p className="text-gray-600 mb-4">
              Contact us within 7 days for size or fit exchanges. Here's how it works:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Reach out via WhatsApp, email, or phone with your order number</li>
              <li>Confirm your preferred size or style</li>
              <li>We'll arrange a pickup for your original item</li>
              <li>Receive your replacement within 3-5 business days</li>
              <li>Free return shipping provided</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Refund Timeline</h2>
            <p className="text-gray-600">
              Refunds are processed within <strong>5-7 business days</strong> of receiving and verifying your returned item. The amount will be credited back to your original payment method or S.R. Enterprises account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>How to Initiate a Return</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 1: Contact Us</h3>
                <p className="text-gray-700 text-sm">
                  Reach out within 7 days of delivery via WhatsApp, email, or phone with your order number.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 2: Get Return Authorization</h3>
                <p className="text-gray-700 text-sm">
                  Our team will verify your return request and provide a return address and authorization number.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 3: Ship the Item</h3>
                <p className="text-gray-700 text-sm">
                  Pack the item securely in original packaging and ship to the provided address. We recommend using tracked shipping.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 4: Receive Refund</h3>
                <p className="text-gray-700 text-sm">
                  Once we receive and verify your return, your refund will be processed within 5-7 business days.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#800020' }}>Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:support@srenterprises.com" className="hover:underline" style={{ color: '#800020' }}>
                  support@srenterprises.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+919876543210" className="hover:underline" style={{ color: '#800020' }}>
                  +91 98765 43210
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#25D366' }}>
                  Chat Now
                </a>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Non-Returnable Items</h3>
            <p className="text-blue-800 text-sm mb-3">
              Some items are non-returnable or have special return policies:
            </p>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• Customized or made-to-order items (unless defective)</li>
              <li>• Final sale or clearance items (will be marked at checkout)</li>
              <li>• Items purchased with discounts over 50% off</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}