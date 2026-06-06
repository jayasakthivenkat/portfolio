# Project Structure Summary

## Backend Directory Structure

```
backend/
├── config/
│   └── database.js           # MongoDB connection setup
├── models/
│   ├── User.js              # Admin user model
│   ├── Project.js           # Project model
│   ├── Skill.js             # Skill model
│   ├── Experience.js        # Work experience model
│   ├── Certification.js     # Certification model
│   ├── Contact.js           # Contact submission model
│   ├── About.js             # About/Profile model
│   └── Service.js           # Services model
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── projectController.js # Project CRUD operations
│   ├── skillController.js   # Skill CRUD operations
│   ├── experienceController.js
│   ├── certificationController.js
│   ├── contactController.js
│   ├── aboutController.js
│   └── serviceController.js
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   ├── projectRoutes.js     # Project endpoints
│   ├── skillRoutes.js       # Skill endpoints
│   ├── experienceRoutes.js
│   ├── certificationRoutes.js
│   ├── contactRoutes.js
│   ├── aboutRoutes.js
│   └── serviceRoutes.js
├── middleware/
│   ├── auth.js              # JWT authentication middleware
│   └── errorHandler.js      # Global error handling
├── utils/
│   ├── emailService.js      # Email sending utility
│   └── validation.js        # Input validation utility
├── scripts/
│   └── seed.js              # Database seeding script
├── server.js                # Express app and server setup
├── package.json             # Dependencies
├── .env.example             # Example env variables
├── .gitignore              # Git ignore rules
├── Dockerfile              # Docker containerization
├── DEPLOYMENT.md           # Deployment guide
└── render.yaml             # Render deployment config
```

## Frontend Directory Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Footer.jsx              # Footer
│   │   ├── Hero.jsx                # Hero section
│   │   ├── About.jsx               # About section
│   │   ├── Skills.jsx              # Skills section
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Experience.jsx          # Experience timeline
│   │   ├── Certifications.jsx      # Certifications display
│   │   ├── Services.jsx            # Services offered
│   │   ├── Contact.jsx             # Contact form
│   │   └── ProtectedRoute.jsx      # Route protection component
│   ├── pages/
│   │   ├── Home.jsx                # Main portfolio page
│   │   ├── AdminLogin.jsx          # Admin login page
│   │   └── AdminDashboard.jsx      # Admin dashboard
│   ├── context/
│   │   ├── ThemeContext.jsx        # Dark/light mode context
│   │   └── AuthContext.jsx         # Authentication context
│   ├── hooks/
│   │   └── index.js                # Custom hooks (useTheme, useAuth)
│   ├── services/
│   │   ├── api.js                  # Axios instance configuration
│   │   └── index.js                # API call functions
│   ├── styles/
│   │   └── globals.css             # Global styles and animations
│   ├── assets/
│   │   └── (images, fonts, etc)
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # React DOM render
├── public/
│   └── favicon.svg
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── postcss.config.js               # PostCSS config
├── .env.example                    # Example env variables
├── .gitignore                      # Git ignore rules
├── Dockerfile                      # Docker containerization
├── vercel.json                     # Vercel deployment config
└── DEPLOYMENT.md                   # Deployment guide
```

## Key Files Explained

### Backend
- **server.js**: Entry point, sets up Express app, connects to MongoDB, initializes routes
- **database.js**: MongoDB connection function with error handling
- **auth.js (middleware)**: JWT verification and role-based authorization
- **errorHandler.js (middleware)**: Centralized error handling for all routes
- **seed.js**: Populates database with sample data for testing

### Frontend
- **App.jsx**: Router setup, wraps app with contexts and providers
- **main.jsx**: React render, mounts App component
- **ThemeContext.jsx**: Manages dark/light mode state across app
- **AuthContext.jsx**: Manages user authentication state and token
- **api.js**: Axios instance with JWT token attachment and error handling
- **globals.css**: Tailwind CSS directives and custom animations

## Data Models

### User
- name, email, password (hashed), role (admin/user), timestamps

### Project
- title, description, shortDescription, image, technologies, link, github, category, featured, status, order

### Skill
- name, category, proficiency (0-100), icon, order

### Experience
- jobTitle, company, description, startDate, endDate, currentlyWorking, location, order

### Certification
- name, issuer, credentialId, credentialUrl, issueDate, expiryDate, description, order

### Service
- name, description, icon, order

### Contact
- name, email, phone, subject, message, status (new/read/replied/archived), read, reply, replyDate

### About
- bio, headline, profileImage, resumeUrl, socialLinks (linkedin, github, twitter, instagram, portfolio)

## API Authentication Flow

1. User logs in with email/password
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. Axios automatically includes token in Authorization header
5. Protected routes verify token and user role
6. If token expires or is invalid, user is redirected to login

## Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Glassmorphism**: Semi-transparent glass effect with backdrop blur
- **Framer Motion**: Smooth animations and transitions
- **Dark/Light Mode**: CSS custom properties and class-based theme switching
- **Responsive**: Mobile-first design with breakpoints at 768px and 1024px
