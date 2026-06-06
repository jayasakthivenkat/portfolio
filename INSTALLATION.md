# Installation & Setup Guide

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js** (v18.x or higher) - [Download](https://nodejs.org)
- **npm** (v9.x or higher) - comes with Node.js
- **Git** - [Download](https://git-scm.com)
- **MongoDB Atlas Account** - [Create free account](https://www.mongodb.com/cloud)
- **GitHub Account** - for version control
- **Email Account** (Gmail recommended) - for contact form emails

## 🚀 Quick Start (Local Development)

### 1. Clone/Extract Project
```bash
cd portfolio\ website
```

### 2. Backend Setup

#### Terminal 1:
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your values
# - MONGODB_URI: Your MongoDB connection string
# - JWT_SECRET: Any long random string
# - Email credentials for contact form

# Start development server
npm run dev
```

✅ Backend runs on `http://localhost:5000`

### 3. Frontend Setup

#### Terminal 2:
```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Start development server
npm run dev
```

✅ Frontend runs on `http://localhost:3000`

### 4. Access Application
- **Portfolio**: http://localhost:3000
- **Admin**: http://localhost:3000/admin/login

## 🔑 First Time Admin Setup

### Register Admin Account
1. Open admin login: `http://localhost:3000/admin/login`
2. Click "Register" or navigate to `/admin/register`
3. Enter:
   - Name: Your name
   - Email: admin@portfolio.com
   - Password: Strong password (min 6 chars)
4. Click Register
5. You'll be logged in automatically

### Add Your Portfolio Content
1. Go to Dashboard
2. Add your:
   - Projects
   - Skills
   - Experience
   - Certifications
   - Services

## 🗄️ Database Setup

### MongoDB Atlas Setup

1. **Create Account**
   - Go to [mongodb.com/cloud](https://www.mongodb.com/cloud)
   - Sign up free account

2. **Create Cluster**
   - Click "Create" → "Build a Cluster"
   - Select Free tier
   - Choose region closest to you
   - Create cluster (takes 2-3 minutes)

3. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

4. **Whitelist IP**
   - Go to "Network Access"
   - Add IP Address
   - For development: `0.0.0.0/0`
   - For production: Your server IP only

5. **Update Backend .env**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

### Seed Database (Optional)
```bash
cd backend
npm run seed
```

This adds sample projects, skills, etc. for testing.

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
   - Go to myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Generate password (16 characters)
   - Copy this password

3. **Update .env**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=the-16-char-password-from-step-2
   EMAIL_FROM=noreply@portfolio.com
   ```

### Test Email
- Submit contact form on homepage
- Check your inbox for confirmation email

## 🐳 Using Docker (Optional)

### Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Run with Docker Compose
```bash
# From project root
docker-compose up -d

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

### Stop Docker
```bash
docker-compose down
```

## 🌐 Environment Variables

### Backend .env

```env
# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio

# JWT
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRE=7d

# Admin (first time setup)
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin123456

# Email Service
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@portfolio.com

# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3000
```

### Frontend .env.local

```env
VITE_API_URL=http://localhost:5000/api
```

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Get all projects
curl http://localhost:5000/api/projects

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.com","password":"admin123456"}'
```

See [API_TESTING.md](API_TESTING.md) for complete API testing guide.

### Test Frontend
1. Go to http://localhost:3000
2. Test:
   - ✅ Page loads correctly
   - ✅ Dark/light mode toggle works
   - ✅ Navigation links work
   - ✅ Contact form submits
   - ✅ Admin login works

## 📦 Production Build

### Frontend Build
```bash
cd frontend
npm run build

# Output in dist/
# Test build locally:
npm run preview
```

### Backend Build
Backend is ready as-is. For production:
- Set `NODE_ENV=production`
- Use `npm start` instead of `npm run dev`
- Set strong `JWT_SECRET`

## 🚢 Deployment

### Deploy Frontend on Vercel

```bash
# Push code to GitHub first
git push origin main

# Then in Vercel:
1. Import GitHub repository
2. Set build command: npm run build
3. Set output directory: dist
4. Add env: VITE_API_URL=https://your-backend.com/api
5. Deploy
```

### Deploy Backend on Render

```bash
# Push code to GitHub first
git push origin main

# Then in Render:
1. Create new Web Service
2. Connect GitHub repository
3. Add environment variables
4. Deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) files in frontend/ and backend/ for detailed guides.

## ✅ Verification Checklist

After setup, verify:
- [ ] Backend server running on port 5000
- [ ] Frontend app running on port 3000
- [ ] MongoDB connection working
- [ ] Admin login successful
- [ ] Can add projects/skills/experience
- [ ] Contact form sends email
- [ ] Dark mode toggle works
- [ ] Responsive on mobile

## 🆘 Troubleshooting

### Backend won't start
```bash
# Check port 5000 not in use
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### MongoDB connection error
- Verify connection string in .env
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Frontend shows blank page
- Check console for errors
- Verify backend is running
- Clear browser cache: Ctrl+Shift+Delete

### Email not sending
- Verify Gmail app password (16 chars)
- Check 2FA is enabled on Gmail
- Test with different email provider if needed

### Port already in use
```bash
# Change port in .env or vite.config.js
# Or kill process using port:

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

## 📚 Next Steps

1. **Customize Design**
   - Edit tailwind.config.js
   - Modify colors in globals.css
   - Add your images to public/

2. **Add More Content**
   - Add more projects
   - Add blog section
   - Add testimonials

3. **Setup CI/CD**
   - Use GitHub Actions
   - Auto-deploy on push
   - Run tests automatically

4. **Monitor & Scale**
   - Set up error tracking (Sentry)
   - Monitor performance (Lighthouse)
   - Optimize database queries

## 📞 Support

- Check [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for file explanations
- Review [API_TESTING.md](API_TESTING.md) for API documentation
- See console errors for specific issues

Happy coding! 🎉
