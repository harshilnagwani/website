import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  const [tagline, setTagline] = useState('MODERN TRADITION. TAILORED FOR YOU.');

  useEffect(() => {
    loadTagline();
  }, []);

  const loadTagline = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'hero_tagline')
        .maybeSingle();

      if (data?.value) {
        setTagline(data.value);
      }
    } catch (error) {
      console.error('Error loading tagline:', error);
    }
  };

  return (
    <div className="relative h-600px lg:h-700px w-full overflow-hidden" style={{ height: '600px' }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(54, 69, 79, 0.4), rgba(128, 0, 32, 0.5)), url('https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }} />
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-wider" style={{ color: '#FFFDD0', fontFamily: "'Playfair Display', serif" }}>
            {tagline}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-cream-100 max-w-2xl mx-auto" style={{ color: '#FFFDD0' }}>
            Discover our exclusive collection of premium ethnic and formal wear.
          </p>
          <button onClick={onShopNow} className="px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-all" style={{ backgroundColor: '#800020' }}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
