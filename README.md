# HNG-AUDIOPHILE-PROJECT
# By: LawrenceM
audiophile



# Audiophile Web App


A modern ticket management web application built with PHP, Twig templating engine, and vanilla JavaScript. This implementation is part of the HNG Stage 2 Multi-Framework Ticket Web App task.

## 🛠️ Frameworks and Libraries Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Convex
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Validation**: Zod
- **State Management**: React Context API
- **UI Components**: Shadcn UI + Custom Components
- 

## 📋 Prerequisites

- **Node.js 18+ or higher** installed
- **Gmail account** for email sending (with App Password)
- **Convex account** (convex.dev)
- Modern web browser with JavaScript enabled

## 🚀 Setup and Installation

### 1. Clone or Download the Project

```bash
cd HNG-AUDIOPHILE-PROJECT
```

### 2. Install Dependencies

```bash
pnpm install
```

This will install its dependencies.

### 3.  Set Up Environment Variables

Create a .env.local file in the root directory:

.env

### 4. Convex Implementation/ Setup

# Convex
CONVEX_DEPLOYMENT=your-convex-deployment-url
NEXT_PUBLIC_CONVEX_URL=https://your-convex-project.convex.cloud

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

### 5. Convex Pre-requisite

# Login to Convex
npx convex login

# Initialize Convex (if not already done)
npx convex dev

# Deploy Convex functions
npx convex deploy

## 📱 Application Structure

### Pages

- **Home** (`/`) - Homepage with hero section and features
- **Authentication** (`/auth/login`, `/auth/signup`) - Login and registration
- **Dashboard** (`/dashboard`) - Overview with ticket statistics
- **Tickets** (`/tickets`) - Full CRUD ticket management

### Project Structure

```
HNG-AUDIOPHILE-PROJECT/
├── config.php                 # App config
├── composer.json             # PHP dependencies
├── public/                   # Public web root
│   ├── index.php            # Main router
│   ├── auth.php             # Auth router
│   ├── api/
│   │   └── tickets.php      # Tickets API endpoint
│   ├── assets/
│   │   ├── index.css        # Custom styles
│   │   └── js/
│   │       ├── config.js    # JS configuration
│   │       ├── pages/       # Page-specific JS
│   │       └── utils/       # Utility functions
│   └── data/
│       └── tickets.json     # Ticket data storage
├── src/
│   └── templates/
│       ├── layouts/
│       │   └── base.twig    # Base layout template
│       ├── pages/           # Page templates
│       └── partials/        # Reusable components
└── vendor/                  # Composer dependencies
```

## 🎨 UI Components and Features

### Layout Components

- **Pixel-Perfect Design** - Responsive across mobile, tablet, and desktop breakpoints
- **Complete Checkout Flow** - Form validation, order processing, and confirmation emails
- **Shopping Cart** - Persistent cart with add/remove/update quantity functionality
- **Email Notificationsro** - Professional HTML emails sent on order confirmation
- **Accessibility** - keyboard navigation, and screen reader support

### Ticket Components

- **Ticket Cards** - Box-style display with status badges
- **Ticket Dialog** - Modal for create/edit operations
- **Delete Confirmation** - Safety dialog for ticket deletion
- **Status Badges** - Color-coded status indicators
  - 🟢 Open - Green (#22c55e)
  - 🟠 In Progress - Amber (#f59e0b)
  - ⚫ Closed - Gray (#9ca3af)

### State Management

- **Authentication State** - Managed via localStorage with key `ticketapp_session`
- **Ticket State** - Fetched from API and stored in memory
- **Form State** - Local component state with validation

## 🔐 Authentication System

### Session Management

- Uses localStorage with key: `ticketapp_session`
- Stores user data including email and name
- Protected routes check for valid session
- Automatic redirect to login if unauthorized



- **Name** - Required for signup
- **Email** - Required, must be valid email format
- **Password** - Required, minimum validation


## 📱 Responsive Design

### Breakpoints

- **Mobile** - < 640px (stacked layout)
- **Tablet** - 640px - 1024px (2-column grid)
- **Desktop** - > 1024px (3-column grid, max-width 1440px)


# 📞 Support and Contact: 08065484243 or send email to: madusquare@gmail.com

For questions about this implementation, refer to the HNG Internship documentation or community channels.

## 📄 License

This project is created for the HNG Stage 2 Internship task.

---

