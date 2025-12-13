export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  base_price: number;
  discount_price?: number;
  images: string[];
  badges: string[];
  is_published: boolean;
  is_made_to_order: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  size: string;
  color: string;
  stock: number;
  created_at: string;
}

export interface Customer {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
}

export interface Address {
  id: string;
  customer_id: string;
  full_name: string;
  phone: string;
  address_line: string;
  city: string;
  state: string;
  pincode: string;
  is_default: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: Address;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Returned' | 'Cancelled';
  payment_status: 'Paid' | 'Unpaid';
  payment_method: string;
  tracking_number?: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  variant_id: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Review {
  id: string;
  product_id: string;
  customer_id?: string;
  customer_name: string;
  customer_email: string;
  rating: number;
  review_text: string;
  is_verified_purchase: boolean;
  is_approved: boolean;
  admin_reply?: string;
  created_at: string;
}

export interface CartItem {
  id: string;
  customer_id?: string;
  session_id?: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  created_at: string;
  product?: Product;
  variant?: ProductVariant;
}

export const CATEGORIES = [
  'Kurta Pajama',
  'Jodhpuri Set',
  'Blazers',
  'Two Piece',
  'Three Piece',
  'Four Piece',
  'Five Piece'
] as const;

export const SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'Custom'] as const;
