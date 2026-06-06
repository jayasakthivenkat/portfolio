# Project Configuration Files

## For Render Backend Deployment

Create `render.yaml` in backend root (already created)

## For Vercel Frontend Deployment

Create `vercel.json` in frontend root (already created)

## Key Configuration Files

### Backend
- `.env` - Environment variables (create from .env.example)
- `package.json` - Dependencies and scripts
- `server.js` - Main server file

### Frontend  
- `.env.local` - Environment variables (create from .env.example)
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vercel.json` - Vercel deployment config

## MongoDB Atlas Configuration

1. Create account at mongodb.com/cloud
2. Create cluster
3. Add IP address to network access (use 0.0.0.0/0 for development)
4. Create database user
5. Get connection string
6. Add to backend `.env` as `MONGODB_URI`

## GitHub Configuration

1. Create GitHub repository
2. Push code
3. Update deployment platforms:
   - Vercel: Connect GitHub for auto-deploy
   - Render: Connect GitHub for auto-deploy

## Production Checklist

- [ ] Set all required environment variables
- [ ] Use strong JWT secret
- [ ] Configure CORS for production URLs
- [ ] Set NODE_ENV to production
- [ ] Update API URLs
- [ ] Test all features
- [ ] Check error handling
- [ ] Monitor application logs
- [ ] Set up email service
- [ ] Configure database backups
