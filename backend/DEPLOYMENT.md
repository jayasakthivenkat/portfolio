# Backend Deployment Guide

## Deployment on Render

### 1. Prepare Repository
- Push your code to GitHub
- Ensure `.gitignore` includes `node_modules/` and `.env`

### 2. Create Render Account
- Go to [render.com](https://render.com)
- Sign up and connect your GitHub account

### 3. Create New Web Service
- Click "New +" and select "Web Service"
- Connect your GitHub repository
- Select the repository and branch

### 4. Configure Service
- **Name**: `portfolio-backend` (or your preferred name)
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: Free or Starter

### 5. Environment Variables
Add in Render dashboard:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `JWT_SECRET` - Strong random string
- `JWT_EXPIRE` - `7d`
- `ADMIN_EMAIL` - Your admin email
- `ADMIN_PASSWORD` - Strong password
- `EMAIL_USER` - Gmail address
- `EMAIL_PASS` - Gmail app password
- `EMAIL_FROM` - From email address
- `NODE_ENV` - `production`
- `PORT` - `5000`
- `CORS_ORIGIN` - Your frontend URL (e.g., `https://yourportfolio.vercel.app`)
- `CLIENT_URL` - Your frontend URL

### 6. Deploy
- Click "Create Web Service"
- Render will automatically deploy when you push to GitHub

### 7. Monitor
- Check logs in Render dashboard
- Monitor application health and performance

## Troubleshooting

### Connection Issues
- Check MongoDB URI in environment variables
- Ensure IP whitelist on MongoDB Atlas includes Render servers
- Add `0.0.0.0/0` to MongoDB Atlas IP whitelist for testing

### CORS Errors
- Update `CORS_ORIGIN` to match your frontend URL
- Ensure frontend API URL matches backend URL

### Email Not Sending
- Verify Gmail app password
- Check email configuration in `.env`
- Review email logs

## Scaling

For production:
1. Upgrade from free tier to paid tier
- Better performance
- Custom domains
- Auto-scaling support

2. Monitor metrics
- CPU usage
- Memory usage
- Response times

3. Optimize
- Database indexing
- Caching strategies
- API optimization

## Backup & Security

- Regular database backups (MongoDB Atlas)
- Rotate JWT secret periodically
- Update dependencies regularly
- Monitor security advisories
