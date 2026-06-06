# Troubleshooting Guide

## Common Issues & Solutions

### Backend Issues

#### 1. Backend won't start

**Error**: `Error: Cannot connect to MongoDB`

**Solution**:
```bash
# Check MongoDB URI in .env
# Verify format: mongodb+srv://username:password@cluster.mongodb.net/dbname

# Test connection
node -e "require('mongoose').connect(process.env.MONGODB_URI).then(() => console.log('Connected')).catch(e => console.log('Error:', e.message))"
```

#### 2. Port already in use

**Error**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution**:
```bash
# Windows - Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>

# Or change port in .env
PORT=5001
```

#### 3. Module not found errors

**Error**: `Cannot find module 'mongoose'`

**Solution**:
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### 4. CORS errors

**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
- Update `CORS_ORIGIN` in .env:
```env
# For local development
CORS_ORIGIN=http://localhost:3000

# For production
CORS_ORIGIN=https://your-frontend-url.com
```

#### 5. Email not sending

**Error**: Contact form submissions fail or no emails received

**Solution**:
1. Verify Gmail credentials in .env:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password  # NOT your Gmail password
EMAIL_FROM=noreply@portfolio.com
```

2. Enable Less Secure App Access (if not using app password)

3. Test with curl:
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

#### 6. JWT authentication issues

**Error**: `401 - Invalid or expired token`

**Solution**:
- Ensure token is sent in Authorization header:
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:5000/api/projects
```

- Check JWT_SECRET in .env is set
- Token may have expired (check JWT_EXPIRE setting)

### Frontend Issues

#### 1. Frontend won't start

**Error**: `EACCES: permission denied`

**Solution**:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### 2. Blank page or white screen

**Error**: App loads but shows nothing

**Solution**:
1. Check browser console (F12 → Console tab)
2. Verify React is rendering:
```javascript
// In browser console
document.querySelector('#root').innerHTML
```

3. Check if components are importing correctly
4. Verify API is accessible:
```bash
curl http://localhost:5000/api/health
```

#### 3. API connection fails

**Error**: `Cannot connect to API` or `Failed to fetch`

**Solution**:
1. Verify backend is running:
```bash
curl http://localhost:5000/api/health
```

2. Check `VITE_API_URL` in .env.local:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Check for CORS errors in browser console

4. Verify network in browser DevTools (Network tab)

#### 4. Dark mode not working

**Error**: Theme toggle doesn't change appearance

**Solution**:
1. Check localStorage:
```javascript
// In browser console
localStorage.getItem('theme')
```

2. Verify ThemeProvider wraps entire app in App.jsx

3. Check document class:
```javascript
// Should be 'dark' or ''
document.documentElement.className
```

#### 5. Admin login fails

**Error**: `Invalid credentials` or `Cannot find user`

**Solution**:
1. Check admin exists in database:
```bash
# From MongoDB Atlas
db.users.find({})
```

2. Verify email and password match

3. Check authContext is properly initialized

4. Test login with curl:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@portfolio.com",
    "password": "yourpassword"
  }'
```

#### 6. Styles not loading

**Error**: Page looks unstyled

**Solution**:
1. Check Tailwind CSS is compiled:
```bash
cd frontend
npm run dev  # Rebuilds CSS
```

2. Verify tailwind.config.js includes correct paths:
```js
content: ['./index.html', './src/**/*.{js,jsx}']
```

3. Check global.css is imported in main.jsx

4. Clear browser cache (Ctrl+Shift+Delete)

### Database Issues

#### 1. MongoDB connection timeout

**Error**: `MongoNetworkError: connection timed out`

**Solution**:
1. Check MongoDB Atlas is running
2. Verify IP is whitelisted:
   - Go to Network Access → IP Whitelist
   - Add `0.0.0.0/0` for development
   - Add specific IPs for production

3. Check connection string has correct password

#### 2. Database empty

**Error**: No data showing on portfolio

**Solution**:
```bash
# Seed database with sample data
cd backend
npm run seed
# or
node scripts/seed.js
```

#### 3. Connection string format wrong

**Error**: `Invalid connection string`

**Solution**:
Correct format:
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

Replace:
- `username` - your database user
- `password` - your password (URL encode special chars)
- `cluster` - your cluster name
- `database-name` - your database name

### Deployment Issues

#### 1. Build fails on Vercel

**Error**: Build step failed

**Solution**:
1. Check build logs in Vercel
2. Verify all environment variables are set
3. Ensure dependencies are in package.json:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.0"
  }
}
```

#### 2. Backend not accessible from frontend

**Error**: API calls fail from production frontend

**Solution**:
1. Update `VITE_API_URL` to production backend URL
2. Update `CORS_ORIGIN` on backend to production frontend URL
3. Ensure backend is running and accessible
4. Check environment variables on deployment platform

#### 3. Database not accessible from Render

**Error**: MongoDB connection fails on Render

**Solution**:
1. Add Render IP to MongoDB Atlas whitelist
2. Verify `MONGODB_URI` on Render matches exact connection string
3. Test with simpler connection first
4. Check database user permissions

### Performance Issues

#### 1. Slow page load

**Solution**:
1. Check network tab in DevTools
2. Optimize images (use WebP format)
3. Remove unused dependencies
4. Enable caching on backend:
```javascript
res.set('Cache-Control', 'public, max-age=3600');
```

#### 2. High API response time

**Solution**:
1. Add database indexes
2. Optimize queries
3. Use pagination for large lists
4. Cache frequently accessed data

### Security Issues

#### 1. JWT token leaked

**Error**: Someone got access to your token

**Solution**:
1. Change JWT_SECRET in .env
2. Clear all user tokens
3. Users need to log in again
4. Rotate tokens periodically

#### 2. Sensitive data exposed

**Error**: API keys/credentials visible in code

**Solution**:
1. Move all secrets to .env
2. Add .env to .gitignore
3. Never commit .env file
4. Rotate exposed credentials immediately

## Getting Help

### Debug Mode
Enable detailed logging:
```javascript
// Backend - add to server.js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// Frontend - add to api.js
api.interceptors.response.use(
  r => { console.log(r); return r; },
  e => { console.error(e); return Promise.reject(e); }
);
```

### Check Logs
```bash
# Backend logs
tail -f logs/server.log

# Browser console
F12 → Console tab

# MongoDB logs
MongoDB Atlas → Monitoring → Logs
```

### Useful Commands
```bash
# Check node version
node --version

# Check npm version
npm --version

# Clear npm cache
npm cache clean --force

# Install specific version
npm install package@1.2.3

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Still Having Issues?

1. **Check the files**:
   - [README.md](README.md) - Overview
   - [GETTING_STARTED.md](GETTING_STARTED.md) - Setup guide
   - [API_TESTING.md](API_TESTING.md) - API documentation
   - [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - File structure

2. **Search online**:
   - Google the error message
   - Check Stack Overflow
   - Review package documentation

3. **Check GitHub Issues**:
   - Search for similar problems
   - Create a new issue with:
     - Error message
     - Steps to reproduce
     - Environment info (Node version, OS, etc.)

4. **Debug step by step**:
   - Test each component in isolation
   - Check API responses with curl/Postman
   - Verify database entries
   - Monitor browser network tab

Remember: Most issues have been solved before! Google your error message.
