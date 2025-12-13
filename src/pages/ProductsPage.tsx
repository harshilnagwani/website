import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Product, CATEGORIES } from '../types';
import ProductCard from '../components/ProductCard';

interface ProductsPageProps {
  onViewProduct: (productId: string) => void;
  searchQuery?: string;
  category?: string;
}

export default function ProductsPage({ onViewProduct, searchQuery, category }: ProductsPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'All');

  useEffect(() => {
    loadProducts();
  }, [searchQuery, selectedCategory]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      let query = supabase.from('products').select('*').eq('is_published', true);
      if (selectedCategory !== 'All') query = query.eq('category', selectedCategory);
      if (searchQuery) query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
      const { data, error } = await query;
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#800020' }}>{selectedCategory === 'All' ? 'All Products' : selectedCategory}</h1>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setSelectedCategory('All')} className="px-4 py-2 rounded-lg" style={selectedCategory === 'All' ? { backgroundColor: '#800020', color: 'white' } : { backgroundColor: 'white' }}>All</button>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className="px-4 py-2 rounded-lg" style={selectedCategory === cat ? { backgroundColor: '#800020', color: 'white' } : { backgroundColor: 'white' }}>
              {cat}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="flex justify-center"><div className="animate-spin h-12 w-12 border-b-2" style={{ borderColor: '#800020' }}></div></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => <ProductCard key={product.id} product={product} onViewDetails={onViewProduct} />)}
          </div>
        )}
      </div>
    </div>
  );
}
