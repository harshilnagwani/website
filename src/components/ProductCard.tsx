import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const displayPrice = product.discount_price || product.base_price;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
      <div className="mb-4 h-64 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
        <img src={product.images[0] || 'https://via.placeholder.com/300'} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{product.category}</p>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-bold" style={{ color: '#800020' }}>₹{displayPrice}</span>
        {product.discount_price && <span className="text-sm line-through text-gray-500">₹{product.base_price}</span>}
      </div>
      <button onClick={() => onViewDetails(product.id)} className="w-full py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: '#800020' }}>
        View Details
      </button>
    </div>
  );
}