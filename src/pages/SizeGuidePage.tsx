import { Ruler } from 'lucide-react';

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Ruler className="h-16 w-16 mx-auto mb-4" style={{ color: '#800020' }} />
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#800020', fontFamily: "'Playfair Display', serif" }}>
            Size Guide
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive sizing guide. All measurements are in centimeters.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#36454F' }}>
            How to Measure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#800020' }}>1. Chest</h3>
                <p className="text-gray-700 text-sm">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#800020' }}>2. Waist</h3>
                <p className="text-gray-700 text-sm">Measure around your natural waistline, keeping the tape comfortably loose.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#800020' }}>3. Shoulder</h3>
                <p className="text-gray-700 text-sm">Measure from one shoulder point to the other across your back.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#800020' }}>4. Sleeve Length</h3>
                <p className="text-gray-700 text-sm">Measure from the shoulder point to the wrist with your arm slightly bent.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#800020' }}>5. Length</h3>
                <p className="text-gray-700 text-sm">Measure from the shoulder to the desired hem length.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#36454F' }}>
            Kurta & Ethnic Wear Size Chart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2" style={{ borderColor: '#800020' }}>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Chest (cm)</th>
                  <th className="py-3 px-4 text-left font-semibold">Length (cm)</th>
                  <th className="py-3 px-4 text-left font-semibold">Shoulder (cm)</th>
                  <th className="py-3 px-4 text-left font-semibold">Sleeve (cm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'S', chest: '96', length: '106', shoulder: '42', sleeve: '60' },
                  { size: 'M', chest: '102', length: '108', shoulder: '44', sleeve: '62' },
                  { size: 'L', chest: '108', length: '110', shoulder: '46', sleeve: '64' },
                  { size: 'XL', chest: '114', length: '112', shoulder: '48', sleeve: '66' },
                  { size: 'XXL', chest: '120', length: '114', shoulder: '50', sleeve: '68' },
                ].map(row => (
                  <tr key={row.size} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold">{row.size}</td>
                    <td className="py-3 px-4">{row.chest}</td>
                    <td className="py-3 px-4">{row.length}</td>
                    <td className="py-3 px-4">{row.shoulder}</td>
                    <td className="py-3 px-4">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Fit Guide</h3>
          <p className="text-blue-800 text-sm">
            <strong>Slim Fit:</strong> Tailored close to the body for a modern look. <strong>Regular Fit:</strong> Classic comfortable fit ideal for traditional wear.
          </p>
        </div>
      </div>
    </div>
  );
}
