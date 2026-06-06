# Getting Started

## Quick Start Guide

### Step 1: Clone/Download Project
```bash
cd portfolio website
```

### Step 2: Backend Setup (Terminal 1)
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and other config
npm run dev
# Server runs on http://localhost:5000
```

### Step 3: Frontend Setup (Terminal 2)
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local if needed (default localhost:5000 is fine for local dev)
npm run dev
# App runs on http://localhost:3000
```

### Step 4: Access Application
- **Portfolio**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login

### Step 5: First Time Setup
1. Register admin:
   - Go to `/admin/login`
   - Click "Sign up" (if available) or use initial credentials
   - Login to dashboard

2. Add Portfolio Data:
   - Add projects, skills, experience via admin dashboard
   - Update about section
   - Add services

3. Configure Contact Form:
   - Set up email credentials in backend `.env`
   - Test contact form from homepage

## Database Setup

### MongoDB Atlas
1. Create cluster at [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Get connection string
3. Add to backend `.env`:
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio
   ```

### Seed Initial Data (Optional)
```bash
cd backend
node scripts/seed.js
```

## Project Structure Overview

```
📦 Portfolio Website
├── 📁 Backend (Node.js + Express + MongoDB)
│  ├── Models (MongoDB schemas)
│  ├── Controllers (Business logic)
│  ├── Routes (API endpoints)
│  ├── Middleware (Auth, errors)
│  └── server.js (Entry point)
│
└── 📁 Frontend (React + Vite)
   ├── Pages (Home, Admin, etc)
   ├── Components (Navbar, Hero, etc)
   ├── Context (Theme, Auth)
   ├── Services (API calls)
   ├── Styles (Tailwind, CSS)
   └── App.jsx (Root component)
```

## Key Features

✅ **Responsive Design** - Works on all devices
✅ **Dark/Light Mode** - Theme switcher
✅ **Admin Dashboard** - Manage all content
✅ **JWT Authentication** - Secure admin routes
✅ **Dynamic Content** - Fetch from MongoDB
✅ **Contact Form** - Email notifications
✅ **Animations** - Smooth Framer Motion effects
✅ **Glassmorphism** - Modern UI design

## Common Tasks

### Add a New Project
1. Login to admin dashboard
2. Go to "Projects" tab
3. Click "Add project"
4. Fill in details
5. Click "Save"

### Update About Section
1. Login to admin dashboard
2. Go to "Services" or "About" section
3. Edit content
4. Click "Save"

### Manage Contact Submissions
1. Login to admin dashboard
2. Go to "Contacts" tab
3. View all contact messages
4. Reply to messages
5. Archive as needed

### Change Theme
- Click sun/moon icon in navbar
- Theme preference is saved automatically

## Troubleshooting

### "Cannot connect to API"
- Check backend is running on port 5000
- Verify `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend

### "MongoDB connection failed"
- Verify connection string in backend `.env`
- Check MongoDB Atlas IP whitelist
- Ensure database name is correct

### "Login not working"
- Check JWT_SECRET is set in backend `.env`
- Verify admin credentials in database
- Check browser console for errors

### "Styles not loading"
- Clear browser cache
- Run `npm run dev` again
- Check Tailwind CSS is compiled

## Next Steps

1. **Customize Content**
   - Add your projects
   - Update skills and experience
   - Personalize about section

2. **Deploy**
   - Deploy frontend to Vercel
   - Deploy backend to Render
   - Set up MongoDB Atlas

3. **Domain Setup**
   - Add custom domain to frontend
   - Update API URLs for production
   - Configure DNS records

4. **Optimization**
   - Optimize images
   - Add caching
   - Monitor performance

## Support

- Check error messages in console
- Review API responses
- Check middleware logs
- Test with sample data

## Resources

- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Guide](https://expressjs.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Happy Building! 🚀**
