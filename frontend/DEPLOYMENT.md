# Frontend Deployment Guide

## Deployment on Vercel

### 1. Prepare Repository
- Push code to GitHub
- Ensure `.gitignore` includes `node_modules/` and `.env.local`

### 2. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up and connect your GitHub account

### 3. Import Project
- Click "Add New..." → "Project"
- Select your GitHub repository
- Select the `frontend` directory as the root

### 4. Configure Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5. Environment Variables
Set in Vercel dashboard:
- `VITE_API_URL` - Your backend API URL (e.g., `https://your-backend.onrender.com/api`)

### 6. Deploy
- Click "Deploy"
- Vercel automatically deploys on GitHub push

### 7. Custom Domain (Optional)
- Go to project settings
- Click "Domains"
- Add your custom domain
- Update DNS records as instructed

## Development vs Production URLs

### Development
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000/api`

### Production
- **Frontend**: `https://your-portfolio.vercel.app`
- **Backend**: `https://your-backend.onrender.com/api`

## Performance Optimization

### 1. Image Optimization
- Use Next Image component or Vite plugin
- Compress images
- Use appropriate formats (WebP)

### 2. Code Splitting
- Dynamic imports for routes
- Lazy load components
- Remove unused dependencies

### 3. Caching
- Set cache headers
- Use service workers
- Implement client-side caching

### 4. SEO
- Add meta tags in HTML
- Use semantic HTML
- Implement sitemap and robots.txt

## Monitoring

### Analytics
- Monitor user traffic
- Track page views
- Identify performance bottlenecks

### Error Tracking
- Set up error monitoring (Sentry, etc.)
- Monitor API errors
- Track user issues

### Performance
- Use Lighthouse for audits
- Monitor Core Web Vitals
- Track load times

## Troubleshooting

### API Connection Issues
- Verify `VITE_API_URL` environment variable
- Check backend is running and accessible
- Review CORS settings on backend

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Blank Page
- Check browser console for errors
- Verify API responses
- Check React component rendering

## Security

- Keep dependencies updated
- Use HTTPS (automatic with Vercel)
- Don't commit `.env` files
- Use environment variables for secrets
- Implement Content Security Policy

## Scaling

For high traffic:
1. Use Vercel Pro plan
   - Faster deployments
   - Better performance
   - Priority support

2. Implement caching
   - CDN caching
   - Browser caching
   - API response caching

3. Database optimization
   - MongoDB indexing
   - Query optimization
   - Connection pooling
