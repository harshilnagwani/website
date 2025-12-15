import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Product, ProductVariant, Review, SIZES } from '../types';
import { useCart } from '../contexts/CartContext';
import { Star, ChevronLeft, ChevronRight, MessageCircle, Check } from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
  onViewSizeGuide: () => void;
}

export default function ProductDetailPage({ productId, onBack, onViewSizeGuide }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    loadProductDetails();
  }, [productId]);

  useEffect(() => {
    if (selectedSize) {
      const variant = variants.find(v => v.size === selectedSize);
      setSelectedVariant(variant || null);
    }
  }, [selectedSize, variants]);

  const loadProductDetails = async () => {
    try {
      setLoading(true);
      const [productRes, variantsRes, reviewsRes] = await Promise.all([
        supabase.from('products').select('*').eq('id', productId).maybeSingle(),
        supabase.from('product_variants').select('*').eq('product_id', productId),
        supabase.from('reviews').select('*').eq('product_id', productId).eq('is_approved', true).order('created_at', { ascending: false }),
      ]);
      if (productRes.data) setProduct(productRes.data);
      if (variantsRes.data) setVariants(variantsRes.data);
      if (reviewsRes.data) setReviews(reviewsRes.data);
    } catch (error) {
      console.error('Error loading product details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert('Please select a size');
      return;
    }
    if (selectedVariant.stock < quantity) {
      alert('Not enough stock available');
      return;
    }
    try {
      setAddingToCart(true);
      await addToCart(productId, selectedVariant.id, quantity);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      alert('Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#800020' }}></div></div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center min-h-screen"><p className="text-xl text-gray-600">Product not found</p></div>;
  }

  const images = product.images.length > 0 ? product.images : ['https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=800'];
  const whatsappNumber = '+919876543210';
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in ${product?.name}`);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-maroon mb-6" style={{ color: '#800020' }}>
          <ChevronLeft className="h-5 w-5" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 group">
              <img src={images[selectedImageIndex]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {images.length > 1 && (
                <>
                  <button onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button onClick={() => setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => (
                <button key={index} onClick={() => setSelectedImageIndex(index)} className={`aspect-square rounded-lg overflow-hidden border-2`} style={selectedImageIndex === index ? { borderColor: '#800020' } : {}}>
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold" style={{ color: '#800020' }}>
                  ₹{(product.discount_price || product.base_price).toLocaleString()}
                </span>
                {product.discount_price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.base_price.toLocaleString()}</span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                      {Math.round(((product.base_price - product.discount_price) / product.base_price) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Select Size</h3>
                <button onClick={onViewSizeGuide} className="text-sm hover:underline" style={{ color: '#800020' }}>
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-6 gap-2 mb-6">
                {SIZES.map((size) => {
                  const variant = variants.find(v => v.size === size);
                  const isAvailable = variant && variant.stock > 0;
                  const isSelected = selectedSize === size;

                  return (
                    <button key={size} onClick={() => isAvailable && setSelectedSize(size)} disabled={!isAvailable} className={`py-3 rounded-lg font-semibold transition-all`} style={isSelected && isAvailable ? { backgroundColor: '#800020', color: 'white' } : isAvailable ? { border: '2px solid #ddd' } : { border: '2px solid #ddd', color: '#ccc' }}>
                      {size}
                    </button>
                  );
                })}
              </div>
              {selectedVariant && <p className="text-sm text-gray-600 mb-4">{selectedVariant.stock < 5 ? <span className="text-orange-600 font-semibold">Only {selectedVariant.stock} left in stock!</span> : <span className="text-green-600">In Stock</span>}</p>}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center font-semibold hover:border-maroon transition-colors">-</button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center font-semibold hover:border-maroon transition-colors">+</button>
              </div>
            </div>

            <div className="space-y-3">
              <button onClick={handleAddToCart} disabled={!selectedVariant || addingToCart} className="w-full py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" style={{ backgroundColor: '#800020' }}>
                {addingToCart ? 'Adding...' : 'Add to Cart'}
                {showSuccess && <Check className="h-5 w-5" />}
              </button>

              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50 flex items-center justify-center gap-2" style={{ borderColor: '#800020', color: '#800020' }}>
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {product.is_made_to_order && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Made to Order:</strong> Crafted specially for you. Delivery: 7-10 business days.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews ({reviews.length})</h2>
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review!</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.customer_name}</span>
                        {review.is_verified_purchase && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Verified Purchase</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.review_text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40" style={{ backgroundColor: '#25D366' }}>
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
