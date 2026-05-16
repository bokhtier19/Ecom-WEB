# Ecom-WEB

A full-stack e-commerce platform with an admin dashboard, dual payment gateway support (Stripe + Razorpay), cloud image uploads, and complete order management.

## Features

- 🛒 Full product catalogue with categories, filtering, and search
- 💳 Dual payment integration — **Stripe** (international) + **Razorpay** (India)
- 🖼️ Cloud image uploads via Cloudinary + Multer
- 🔐 JWT-based authentication with bcrypt password hashing
- 📦 Order management with status tracking
- 🛠️ Separate admin dashboard for product, order, and inventory management
- ✅ Input validation with express-validator

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, React Router, Tailwind CSS, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| Payments | Stripe, Razorpay |
| Storage | Cloudinary + Multer |

## Architecture

The project has three parts: a customer-facing React frontend, a separate admin dashboard, and a shared Express API backend. Product images are uploaded to Cloudinary via Multer middleware. Payments are handled server-side — Stripe for international cards and Razorpay for Indian UPI and cards — with webhook verification to confirm order completion.

## Getting Started

```bash
git clone https://github.com/bokhtier19/Ecom-WEB.git
cd Ecom-WEB

# Backend
cd backend
cp .env.example .env
npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev

# Admin (new terminal)
cd admin && npm install && npm run dev
```

### Environment Variables

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

## License
MIT