## API Testing Guide

Use this guide to test all API endpoints locally or in production.

### Base URL
- **Local**: `http://localhost:5000/api`
- **Production**: `https://your-backend.onrender.com/api`

### Authentication Flow

#### 1. Register Admin (First Time Only)
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@portfolio.com",
    "password": "securepassword123"
  }'
```

#### 2. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@portfolio.com",
    "password": "securepassword123"
  }'
```
**Response**: Returns JWT token
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "Admin User",
    "email": "admin@portfolio.com",
    "role": "admin"
  }
}
```

#### 3. Get Current User
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Projects Endpoints

#### Get All Projects
```bash
curl -X GET http://localhost:5000/api/projects
```

Query params:
- `category`: web, mobile, desktop, other
- `featured`: true, false

#### Get Single Project
```bash
curl -X GET http://localhost:5000/api/projects/{projectId}
```

#### Create Project (Admin)
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "E-Commerce Platform",
    "description": "Full-stack e-commerce solution with payment integration",
    "shortDescription": "E-commerce platform with React, Node, MongoDB",
    "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
    "link": "https://ecommerce.example.com",
    "github": "https://github.com/user/ecommerce",
    "category": "web",
    "featured": true
  }'
```

#### Update Project (Admin)
```bash
curl -X PUT http://localhost:5000/api/projects/{projectId} \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Project Title"
  }'
```

#### Delete Project (Admin)
```bash
curl -X DELETE http://localhost:5000/api/projects/{projectId} \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Skills Endpoints

#### Get All Skills
```bash
curl -X GET http://localhost:5000/api/skills
```

Query params:
- `category`: frontend, backend, database, tools, other

#### Create Skill (Admin)
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "React",
    "category": "frontend",
    "proficiency": 90
  }'
```

### Experience Endpoints

#### Get All Experiences
```bash
curl -X GET http://localhost:5000/api/experience
```

#### Create Experience (Admin)
```bash
curl -X POST http://localhost:5000/api/experience \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "jobTitle": "Senior Full Stack Developer",
    "company": "Tech Company Inc",
    "description": "Led development of multiple web applications",
    "startDate": "2021-01-01",
    "currentlyWorking": true,
    "location": "San Francisco, CA"
  }'
```

### Certifications Endpoints

#### Get All Certifications
```bash
curl -X GET http://localhost:5000/api/certifications
```

#### Create Certification (Admin)
```bash
curl -X POST http://localhost:5000/api/certifications \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "AWS Certified Solutions Architect",
    "issuer": "Amazon Web Services",
    "issueDate": "2023-01-15",
    "credentialUrl": "https://..."
  }'
```

### Services Endpoints

#### Get All Services
```bash
curl -X GET http://localhost:5000/api/services
```

#### Create Service (Admin)
```bash
curl -X POST http://localhost:5000/api/services \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Web Development",
    "description": "Custom web applications using modern frameworks"
  }'
```

### Contact Endpoints

#### Submit Contact Form (Public)
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project opportunity..."
  }'
```

#### Get All Contacts (Admin)
```bash
curl -X GET http://localhost:5000/api/contacts \
  -H "Authorization: Bearer YOUR_TOKEN"
```

Query params:
- `status`: new, read, replied, archived

#### Reply to Contact (Admin)
```bash
curl -X PUT http://localhost:5000/api/contacts/{contactId}/reply \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reply": "Thank you for your interest..."
  }'
```

#### Delete Contact (Admin)
```bash
curl -X DELETE http://localhost:5000/api/contacts/{contactId} \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### About Endpoints

#### Get About Info
```bash
curl -X GET http://localhost:5000/api/about
```

#### Update About (Admin)
```bash
curl -X PUT http://localhost:5000/api/about \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bio": "Full Stack Developer passionate about creating amazing web experiences",
    "headline": "Full Stack Developer",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourprofile",
      "twitter": "https://twitter.com/yourprofile"
    }
  }'
```

### Health Check
```bash
curl -X GET http://localhost:5000/api/health
```

## Testing Tools

### Postman
1. Import the endpoints above
2. Set `{{base_url}}` variable
3. Add `{{token}}` for authenticated requests
4. Test each endpoint

### VS Code REST Client
Install the REST Client extension and create a `.http` file:

```http
@base_url = http://localhost:5000/api
@token = your_jwt_token

### Get all projects
GET {{base_url}}/projects

### Create project
POST {{base_url}}/projects
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "title": "New Project",
  "description": "Project description",
  "shortDescription": "Short desc",
  "technologies": ["React", "Node.js"]
}
```

## Error Responses

### 401 Unauthorized
```json
{
  "message": "Access token required"
}
```

### 403 Forbidden
```json
{
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "message": "Project not found"
}
```

### 400 Bad Request
```json
{
  "message": "Required fields missing"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

## Notes

- Always include `Authorization: Bearer {token}` header for admin endpoints
- Use `Content-Type: application/json` for POST/PUT requests
- Dates should be in ISO format: `YYYY-MM-DD`
- Use appropriate HTTP methods: GET, POST, PUT, DELETE
- Check response status codes for success/failure
