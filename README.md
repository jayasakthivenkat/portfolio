# Full-Stack Personal Portfolio Website

A modern, responsive full-stack portfolio website built with React.js, Node.js, Express.js, and MongoDB Atlas. Features a professional UI, smooth animations, dark/light mode, and an admin dashboard for managing content.

## 🚀 Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark/Light Mode**: Theme switcher with persistent preference
- **Glassmorphism Effects**: Modern UI with glass-morphic components
- **Smooth Animations**: Framer Motion animations and transitions
- **Admin Dashboard**: JWT-authenticated admin panel
- **Dynamic Content**: All portfolio content managed via REST API
- **MongoDB Integration**: Secure data storage on MongoDB Atlas
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Production Ready**: Error handling, validation, and security measures

## 📁 Project Structure

```
portfolio website/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Experience.js
│   │   ├── Certification.js
│   │   ├── Contact.js
│   │   ├── About.js
│   │   └── Service.js
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── package.json
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
└── README.md
```

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Nodemailer** - Email service
- **Helmet** - Security middleware

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18.x)
- npm (v9.x)
- MongoDB Atlas account
- Gmail account (for email service)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your values:
   - MongoDB URI
   - JWT secret
   - Admin credentials
   - Email configuration
   - Port and client URL

4. **Start development server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env.local`:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   App runs on `http://localhost:3000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Admin)
- `PUT /api/projects/:id` - Update project (Admin)
- `DELETE /api/projects/:id` - Delete project (Admin)

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create skill (Admin)
- `PUT /api/skills/:id` - Update skill (Admin)
- `DELETE /api/skills/:id` - Delete skill (Admin)

### Experience
- `GET /api/experience` - Get all experiences
- `POST /api/experience` - Create experience (Admin)
- `PUT /api/experience/:id` - Update experience (Admin)
- `DELETE /api/experience/:id` - Delete experience (Admin)

### Certifications
- `GET /api/certifications` - Get all certifications
- `POST /api/certifications` - Create certification (Admin)
- `PUT /api/certifications/:id` - Update certification (Admin)
- `DELETE /api/certifications/:id` - Delete certification (Admin)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (Admin)
- `PUT /api/services/:id` - Update service (Admin)
- `DELETE /api/services/:id` - Delete service (Admin)

### About
- `GET /api/about` - Get about information
- `PUT /api/about` - Update about (Admin)

### Contact
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts (Admin)
- `PUT /api/contacts/:id/reply` - Reply to contact (Admin)
- `DELETE /api/contacts/:id` - Delete contact (Admin)

## 🚀 Deployment

### Deploy Backend on Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables
5. Deploy

### Deploy Frontend on Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_URL=<your-render-api-url>`
6. Deploy

### Database Setup (MongoDB Atlas)

1. Create MongoDB Atlas account
2. Create cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

## 📝 Environment Variables

### Backend `.env`
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin_password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@portfolio.com
PORT=5000
NODE_ENV=production
CLIENT_URL=https://your-frontend-url.com
CORS_ORIGIN=https://your-frontend-url.com
```

### Frontend `.env`
```env
VITE_API_URL=https://your-backend-api.com/api
```

## 🔐 Security Features

- JWT authentication for admin routes
- Password hashing with bcrypt
- CORS protection
- Helmet.js security headers
- Input validation
- Protected routes
- Secure token storage

## 📱 Responsive Breakpoints

- Mobile: 0px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎨 Theme System

The application supports both light and dark modes with smooth transitions. Theme preference is saved to localStorage.

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📞 Support

For issues and questions, please create an issue in the repository.

---

**Happy Coding! 🚀**
