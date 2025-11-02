🚀 ## Overview

**Audiophile is a multi-page e-commerce platform where users can explore, view, and purchase high-end audio products.
This implementation brings the official Figma design to life — featuring category pages, product detail routes, cart functionality, and a checkout workflow — all optimized for speed and usability.

✨ #Key Features
🧭 #Core Navigation

Home page featuring hero, category sections, and promoted products

Category pages for Headphones, Speakers, and Earphones

Individual product pages (/products/[slug]) with detailed descriptions and dynamic data

🛒 Shopping Experience

Add, remove, and update quantities in cart

Persistent cart context across all routes

Live item count badge on the cart icon

Checkout page with form validation and order confirmation modal

💳 Checkout Workflow

Billing and shipping information forms

Dynamic calculation of VAT, Shipping, and Grand Total

Confirmation modal matching the Figma “Thank You” layout

🧱 Architecture

Modular component structure (Header, Footer, Cart, ProductPage, etc.)

Context-driven global state management for cart items

File-based routing using Next.js App Router

Fully responsive — desktop, tablet, and mobile breakpoints

🧰 Tech Stack
Category	Technologies Used
Framework	Next.js 14 (App Router)

Language	TypeScript
Styling	Tailwind CSS 3.x

State Management	React Context API
Deployment	Vercel

Image Handling	Next/Image Optimization
Icons & Assets	SVGs from Figma Audiophile Design
🗂️ Project Structure
app/
├── layout.tsx              # Global layout wrapper
├── page.tsx                # Home page
├── category/
│   ├── headphones/page.tsx
│   ├── speakers/page.tsx
│   └── earphones/page.tsx
├── products/
│   └── [slug]/page.tsx     # Dynamic product route
├── checkout/page.tsx       # Checkout workflow
components/
├── Header.tsx              # Top navigation + cart trigger
├── Footer.tsx              # Global footer
├── Cart.tsx                # Cart modal with items
├── CartItem.tsx            # Cart item row
├── AddToCartButton.tsx     # Client action for cart updates
lib/
├── products.ts             # Product database (mock data)
context/
├── CartContext.tsx         # Global cart logic
public/
└── assets/                 # Static images from Figma design

⚙️ Installation and Setup
1️⃣ Clone the repository
git clone https://github.com/<your-username>/audiophile-ecommerce.git
cd audiophile-ecommerce

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


The app will start on:

http://localhost:3000

4️⃣ Build for production
npm run build
npm start

📦 Environment Variables (Optional)

If you plan to extend the project (e.g., with Convex, Sanity, or Stripe), create a .env.local file at the root.

NEXT_PUBLIC_API_BASE_URL=your_api_url
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key


(Not required for static demo version)

🧠 Key Functional Components
Component	Purpose
CartContext.tsx	Manages global cart state, add/remove logic, totals
AddToCartButton.tsx	Client component to trigger addToCart()
Cart.tsx	Displays cart items, live totals, and checkout link
ProductPage	Renders each product’s details dynamically by slug
CheckoutPage	Validated user input form + confirmation modal
Footer	Global site footer with navigation and socials
🎨 Design Consistency

All layouts, spacing, typography, and colors follow the original Audiophile Figma Design System, including:

Primary orange: #D87D4A

Accent orange: #FBAF85

Neutral dark: #101010

Light gray backgrounds: #F1F1F1

Font family: Manrope, sans-serif

🌐 Deployment

Deploy easily using Vercel (recommended):

vercel deploy


Or manually:

Build your project: npm run build

Serve statically via Node, Netlify, or Render.

🧩 Possible Future Enhancements

🛍️ Stripe integration for live payments

🧾 Order history & user authentication

☁️ Integration with Convex for real-time cart backend

🧠 Data persistence (MongoDB or Supabase)

🧪 Unit tests with Jest + React Testing Library

💡 Author

Lawrence Maduabuchi
Software Engineer & ICT Consultant
📍 Port Harcourt, Nigeria
🔗 LinkedIn
 | GitHub

📜 License

This project is open-source and available under the MIT License
.

🖼️ Preview Screens
Page	Screenshot
Home Page	

Product Page	

Checkout Modal
