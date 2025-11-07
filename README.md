# Audiophile E-Commerce Web App


Functional, pixel-perfect e-commerce website for high-end audio equipment built with Next.js, Convex, and modern web technologies.

## 🛠️ Demo
[https://hng-audiophile-project-lm.vercel.app/]

### Tech Stack

- **Framework: Next.js 15 (App Router)**
- **Language: TypeScript**
- **Styling: Tailwind CSS**
- **UI Components: Shadcn UI + Custom Components**
- **Backend: Convex**
- **Validation: Zod**
- **Email: Nodemailer (Gmail SMTP)**

## 📋 Prerequisites

- **Node.js 18+ and pnpm** installed
- **Gmail account for email sending (with App Password)** 
- **Convex account (convex.dev)**
- Modern web browser with JavaScript enabled

## 🚀 Setup and Installation

### 1. Clone or Download the Project

```bash
git clone https://github.com/lawrence1986/HNG-AUDIOPHILE-PROJECT
cd audiophile
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies.

### 3. Environment Variables Setup

Create a .env.local file in the root directory:
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:convex_deploy_url # team: madusquare, project: hng-audiophile-project
NEXT_PUBLIC_CONVEX_URL=https://convex_project.convex.cloud
#Gmail Config
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@xxx.com
SMTP_PASS=get_your_app_pw

### 4. SetUp Convex

**Using PHP Built-in Server**

```bash
# Convex Login
npx convex login

# Initialize Convex (if not already done)
npx convex dev

# Deploy Convex functions
npx convex deploy
```



### 5. Access the Application via Dev Server

Access at: `http://localhost:8000/`


### Project Structure

```
AUDIOPHILE/
│
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tsconfig.json
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   └── send-order-confirmation/route.ts
│   ├── checkout/page.tsx
│   ├── earphones/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── headphones/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── orders/[orderNumber]/page.tsx
│   └── speakers/
│       ├── page.tsx
│       └── [slug]/page.tsx
│
├── components/
│   ├── button.tsx
│   ├── ConvexClientProvider.tsx
│   ├── cart/CartModal.tsx
│   ├── checkout/CheckoutSuccessModal.tsx
│   ├── form/
│   │   ├── NumberInput.tsx
│   │   ├── RadioInput.tsx
│   │   └── TextField.tsx
│   ├── home/
│   │   ├── AboutSection.tsx
│   │   ├── Categories.tsx
│   │   ├── FeaturedYX1.tsx
│   │   ├── FeaturedZX7.tsx
│   │   ├── FeaturedZX9.tsx
│   │   ├── Hero.tsx
│   │   ├── hero.module.css
│   │   ├── featured-zx7.module.css
│   │   ├── featured-zx9.module.css
│   │   └── category.module.css
│   ├── product/AddToCart.tsx
│   └── shared/
│       ├── Footer.tsx
│       └── NavBar.tsx
│
├── contexts/
│   └── CartContext.tsx
│
├── convex/
│   ├── orders.ts
│   ├── schema.ts
│   ├── tsconfig.json
│   ├── README.md
│   └── _generated/
│       ├── api.d.ts
│       ├── api.js
│       ├── dataModel.d.ts
│       ├── server.d.ts
│       └── server.js
│
├── lib/
│   ├── products.ts
│   ├── validation.ts
│   └── email/
│       └── templates/orderConfirmation.ts
│
└── public/
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    ├── window.svg
    ├── assets/
    │   ├── carts.svg
    │   ├── db.json
    │   ├── earphone.png
    │   ├── favicon-32x32.png
    │   ├── hamburger.svg
    │   ├── headphones.png
    │   ├── headphone.svg
    │   ├── logo.svg
    │   ├── man.png
    │   ├── react.svg
    │   ├── speaker.png
    │   ├── zx9-desktop.png
    │   ├── zx9-tab-mob.png
    │   └── (category, checkout, home, product folders with device-specific images)


```

## 🎨 Order Processing

- **Form validation** 
- **Order saved to Convex database** - Consistent footer across all pages
- **Success modal displayed** - Max-width 1440px, centered on large screens
- **Cart cleared on modal close** - SVG wave background on landing page
- **Email confirmation sent (with fallback if fails)**
- **Redirect to homepage** - Blurred circular elements for visual appeal


### Email Template

- **Responsive HTML design**
- **Branded with company colors**
- **Order summary with itemized list**


### Cart Management

- Add/remove items`
- Update quantities
- Persistent storage (localStorage)
- Responsive cart dialog

## 🔄 Database Schema (Convex)
orders: {
  // Customer Details
  name: string
  email: string
  phone: string

  // Shipping
  address: string
  city: string
  country: string
  zipCode: string

  // Payment
  paymentMethod: "e-Money" | "Cash on Delivery"
  eMoneyNumber?: string
  eMoneyPin?: string

  // Order Details
  items: Array<{name, price, amount, imageUrl}>
  subtotal: number
  shipping: number
  vat: number
  grandTotal: number

  // Metadata
  orderId: string
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: number
}

## 🚀 Deployment
'bash'
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel

##🎓 Stage 3 Requirements
This project fulfills all Stage 3 requirements:

✅ Pixel-perfect responsive design (mobile, tablet, desktop)
✅ Complete checkout with validation
✅ Order storage in Convex
✅ Transactional email confirmation
✅ Order confirmation page
✅ Accessibility features
✅ Edge case handling
✅ Clean, modular code

# 📞 Support and Contact: 08065484243 or send email to: madusquare@gmail.com

For questions about this implementation, refer to the HNG Internship documentation or community channels.

## 📄 License

This project is created for the HNG Stage 3 Internship task.

---
