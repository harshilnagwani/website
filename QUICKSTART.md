# Quick Start Guide - S.R. Enterprises E-Commerce Platform

## 5-Minute Setup

### Step 1: Set Environment Variables
```bash
# Edit .env file with your Supabase credentials
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Step 2: Install & Run
```bash
npm install
npm run dev
```

### Step 3: Open Browser
Navigate to `http://localhost:5173`

---

## What You Get

✅ **11 Complete Pages**
- Home, Products, Product Details, Cart, Checkout
- Authentication (Login/Signup)
- Size Guide, Support, Returns, About, Contact

✅ **Full Shopping Experience**
- Browse products by category
- Filter and sort
- View details with image gallery
- Add to cart
- Checkout with order confirmation

✅ **Customer Features**
- Create account
- Login/Logout
- View size guides
- Access support
- Read policies

✅ **Beautiful Design**
- Responsive on all devices
- Premium branding (Maroon, Cream, Gold)
- Smooth animations
- Professional layout

---

## Add Sample Data

### 1. Create a Product
Go to Supabase dashboard → Tables → products → Insert

Fill in:
- name: "Premium Kurta Pajama"
- category: "Kurta Pajama"
- description: "Elegant traditional kurta with modern styling"
- base_price: 2500
- discount_price: 1999
- images: `["https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg"]`
- is_published: true

### 2. Add Size Variants
Go to Tables → product_variants → Insert

Add entries for each size:
- product_id: (from above)
- size: "S"
- color: "default"
- stock: 10

(Repeat for M, L, XL, XXL)

### 3. View on Frontend
- Go to home page
- Click "SHOP NOW"
- See your product!

---

## Key Workflows

### Browse Products
1. Click "SHOP" in header
2. Select category or filter by price
3. Click product card to view details

### Add to Cart
1. Select size
2. Choose quantity
3. Click "Add to Cart"
4. See cart badge update

### Checkout
1. Click cart icon
2. Review items
3. Click "Proceed to Checkout"
4. Enter delivery info
5. Click "Place Order"
6. See confirmation

### Create Account
1. Click "LOGIN" in header
2. Click "Sign Up"
3. Enter email, password, name
4. Click "Create Account"

---

## Customization

### Change Brand Colors
Edit `src/pages` files:
```jsx
style={{ color: '#800020' }}  // Change from #800020
```

Or better: Edit Tailwind config

### Edit Hero Tagline
Update in Supabase:
- Tables → site_settings
- Find key: "hero_tagline"
- Edit value: "YOUR NEW TAGLINE"

### Update Support Info
In Supabase site_settings:
- whatsapp_number
- customer_care_phone
- showroom_address
- support_email

---

## File Locations

```
Project Root/
├── src/
│   ├── pages/           ← All 11 pages
│   ├── components/      ← Header, Hero, etc.
│   ├── contexts/        ← Auth & Cart logic
│   ├── types/           ← TypeScript definitions
│   └── App.tsx          ← Main routing
├── package.json         ← Dependencies
├── vite.config.ts       ← Build config
└── tailwind.config.js   ← Styling config
```

---

## Important URLs

- **Frontend**: http://localhost:5173
- **Supabase Dashboard**: https://app.supabase.com
- **Database**: Supabase project console
- **Components**: src/pages/*.tsx

---

## Common Tasks

### Add New Product
1. Supabase → products → Insert row
2. Fill fields: name, category, price, images, etc.
3. Add variants in product_variants table
4. Appears on frontend immediately

### Test Checkout
1. Add product to cart
2. Go to cart page
3. Click "Proceed to Checkout"
4. Fill form and submit
5. Check orders table in Supabase

### Modify Support Info
1. Supabase → site_settings
2. Edit values for:
   - whatsapp_number
   - customer_care_phone
   - support_email

### Change Branding
Edit color values throughout:
- #800020 = Primary Maroon
- #FFFDD0 = Accent Cream
- #36454F = Charcoal

---

## Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Production build
npm run preview          # Preview build locally

# Code Quality
npm run lint             # Check code
npm run typecheck        # TypeScript check
```

---

## Troubleshooting

### "Not seeing products?"
1. Check Supabase credentials in .env
2. Verify is_published = true in product
3. Refresh browser page
4. Check console for errors

### "Cart not working?"
1. Ensure CartProvider wraps App
2. Check localStorage in browser dev tools
3. Verify Supabase connection

### "Images not loading?"
- Update image URLs to valid sources
- Check CORS settings in Supabase
- Use Pexels or similar for test images

### "Build errors?"
1. Run `npm install`
2. Delete node_modules and .next
3. Run build again

---

## Next Steps

1. **Add More Products** - Populate catalog in Supabase
2. **Customize Branding** - Update colors and text
3. **Add Content** - Edit About, Support, etc.
4. **Deploy** - Deploy to Vercel, Netlify, or AWS
5. **Shopify Integration** - Add payment gateway (optional)

---

## Getting Help

- Check `IMPLEMENTATION_GUIDE.md` for detailed docs
- Review code comments in src/ files
- Check Supabase documentation
- Inspect React/TypeScript errors in console

---

## You're All Set! 🚀

The platform is production-ready. You can:
- Add products
- Take orders
- Manage customers
- Scale to millions of products

Happy selling!

---

**Version**: 1.0.0
**Last Updated**: December 2024