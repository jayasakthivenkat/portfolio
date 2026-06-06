# 🚀 Quick Reference Guide

## Essential Commands

### Start Development

**Backend** (Terminal 1):
```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:5000
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Production Build

```bash
# Frontend
cd frontend
npm run build
# Output: dist/

# Backend ready as-is
# Just set NODE_ENV=production
```

### Database

```bash
# Seed sample data
cd backend
npm run seed
```

### Docker

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

## Environment Variables

### Backend `.env`
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=app_password
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend `.env.local`
```env
VITE_API_URL=http://localhost:5000/api
```

## Key URLs

- **Portfolio**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api
- **API Health**: http://localhost:5000/api/health

## Main API Endpoints

```
Auth:
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me

Projects:
GET    /api/projects
POST   /api/projects (admin)
PUT    /api/projects/:id (admin)
DELETE /api/projects/:id (admin)

Skills:
GET    /api/skills
POST   /api/skills (admin)
PUT    /api/skills/:id (admin)
DELETE /api/skills/:id (admin)

Experience:
GET    /api/experience
POST   /api/experience (admin)
PUT    /api/experience/:id (admin)
DELETE /api/experience/:id (admin)

Certifications:
GET    /api/certifications
POST   /api/certifications (admin)
PUT    /api/certifications/:id (admin)
DELETE /api/certifications/:id (admin)

Services:
GET    /api/services
POST   /api/services (admin)
PUT    /api/services/:id (admin)
DELETE /api/services/:id (admin)

Contacts:
POST   /api/contacts
GET    /api/contacts (admin)
PUT    /api/contacts/:id/reply (admin)
DELETE /api/contacts/:id (admin)

About:
GET    /api/about
PUT    /api/about (admin)
```

## File Structure Quick Reference

```
Backend:
- server.js         → Express app entry point
- config/           → Database connection
- models/           → MongoDB schemas
- controllers/      → Business logic
- routes/           → API endpoints
- middleware/       → Auth, errors
- utils/            → Helpers

Frontend:
- App.jsx           → Root component
- main.jsx          → React entry point
- pages/            → Page components
- components/       → Reusable components
- context/          → State management
- services/         → API calls
- styles/           → Global styles
```

## Common Tasks

### Add a Project
1. Login to admin dashboard
2. Click "Projects" tab
3. Click "Add project"
4. Fill form and save

### Add Skills
1. Go to admin → Skills
2. Click "Add skill"
3. Enter name, category, proficiency
4. Save

### Update About Section
1. Go to admin → About (if available)
2. Edit bio, headline, socials
3. Save

### Test API
```bash
# Get all projects
curl http://localhost:5000/api/projects

# Submit contact
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test"}'
```

## Troubleshooting Quick Fixes

| Issue | Solution |
|-------|----------|
| Port in use | Change PORT in .env or kill process |
| MongoDB error | Check MONGODB_URI and IP whitelist |
| API not connecting | Verify CORS_ORIGIN and VITE_API_URL |
| Email not sending | Check EMAIL_USER and EMAIL_PASS |
| Blank page | Clear cache, check console, restart server |
| Dark mode broken | Clear localStorage |
| Login fails | Verify admin user exists in DB |

## Deployment Checklist

**Before Deployment:**
- [ ] Test all features locally
- [ ] Update all environment variables
- [ ] Set strong JWT_SECRET
- [ ] Configure email service
- [ ] Add production URLs
- [ ] Test database connection
- [ ] Build and test production builds

**Frontend (Vercel):**
- [ ] Push code to GitHub
- [ ] Import project in Vercel
- [ ] Set VITE_API_URL to production backend
- [ ] Deploy

**Backend (Render):**
- [ ] Push code to GitHub
- [ ] Create Web Service in Render
- [ ] Set all environment variables
- [ ] Deploy

**Database (MongoDB):**
- [ ] Create cluster
- [ ] Add IP whitelist
- [ ] Create database user
- [ ] Get connection string
- [ ] Add to MONGODB_URI

## Development Workflow

1. **Make changes** in code
2. **Test locally** (npm run dev)
3. **Verify in browser** (http://localhost:3000)
4. **Test API** with curl/Postman
5. **Commit changes** (git add, commit, push)
6. **Auto-deploy** (Vercel/Render triggers)
7. **Verify production** (check deployed URL)

## Code Snippets

### Add New Model
1. Create file in `backend/models/`
2. Define schema
3. Export model
4. Create controller in `backend/controllers/`
5. Create routes in `backend/routes/`
6. Add routes to `server.js`

### Add New Component
1. Create file in `frontend/src/components/`
2. Import hooks and services
3. Add component logic
4. Export component
5. Import in page or App

### Add API Call
1. Add function to `frontend/src/services/index.js`
2. Import in component: `import { projectAPI } from '../services'`
3. Use in useEffect: `projectAPI.getAll().then(res => ...)`

## Environment Setup

### First Time Setup
```bash
# Clone/extract project
cd portfolio\ website

# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your values

# Frontend
cd frontend
npm install
cp .env.example .env.local
# No changes needed for local dev
```

### MongoDB Atlas
1. Create account at mongodb.com
2. Create cluster
3. Get connection string
4. Add to backend .env

### Gmail Setup
1. Enable 2FA
2. Generate app password
3. Add to backend .env

## Important Files

- `backend/server.js` - Start backend here
- `frontend/App.jsx` - Modify routes here
- `backend/.env` - Add secrets here
- `frontend/.env.local` - API URL here
- `backend/models/` - Change data structure here
- `frontend/src/styles/globals.css` - Modify colors here

## Quick Links

- [Local Setup](GETTING_STARTED.md)
- [Full Setup](INSTALLATION.md)
- [Deploy](backend/DEPLOYMENT.md)
- [API Docs](API_TESTING.md)
- [Fix Issues](TROUBLESHOOTING.md)
- [File Guide](PROJECT_STRUCTURE.md)

## Useful Tools

- **Postman** - Test API endpoints
- **MongoDB Compass** - View database
- **VS Code REST Client** - Quick API testing
- **Chrome DevTools** - Debug frontend
- **Git** - Version control

## Support

- Check documentation files
- Review error messages
- Search Stack Overflow
- Check GitHub issues
- Test with sample data

---

**Pro Tips:**
- Keep terminals organized (use terminal tabs/panes)
- Save API endpoints in a notes file
- Use environment variables for all secrets
- Test API before frontend development
- Commit frequently to GitHub
- Monitor logs for errors
- Use browser DevTools console

**Common Mistakes to Avoid:**
- ❌ Committing .env files
- ❌ Using hardcoded URLs
- ❌ Forgetting to set environment variables
- ❌ Not whitelisting IP in MongoDB
- ❌ Using simple JWT secrets
- ❌ Forgetting CORS configuration
- ❌ Not testing in production mode

---

**Need Help?**
1. Check TROUBLESHOOTING.md
2. Review specific documentation
3. Search error message online
4. Check GitHub/Stack Overflow
5. Review project logs

*Last Updated: 2024*
