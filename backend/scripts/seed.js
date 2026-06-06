#!/usr/bin/env node

// Seed script for initial data
const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Service = require('./models/Service');
const Experience = require('./models/Experience');
const Certification = require('./models/Certification');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Service.deleteMany({});
    await Experience.deleteMany({});
    await Certification.deleteMany({});

    // Seed projects
    const projects = await Project.insertMany([
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        shortDescription: 'E-commerce platform with React, Node, MongoDB',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'web',
        featured: true,
      },
      {
        title: 'Real-Time Chat Application',
        description: 'Chat app with real-time messaging using WebSockets',
        shortDescription: 'Real-time messaging with WebSockets',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        category: 'web',
        featured: true,
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management with drag-drop interface',
        shortDescription: 'Task management with drag-drop UI',
        technologies: ['React', 'Express', 'MongoDB', 'Tailwind'],
        category: 'web',
        featured: false,
      },
    ]);
    console.log('Seeded projects:', projects.length);

    // Seed skills
    const skills = await Skill.insertMany([
      {
        name: 'React',
        category: 'frontend',
        proficiency: 90,
      },
      {
        name: 'Node.js',
        category: 'backend',
        proficiency: 85,
      },
      {
        name: 'MongoDB',
        category: 'database',
        proficiency: 80,
      },
      {
        name: 'JavaScript',
        category: 'frontend',
        proficiency: 95,
      },
      {
        name: 'Express.js',
        category: 'backend',
        proficiency: 85,
      },
      {
        name: 'REST API',
        category: 'backend',
        proficiency: 90,
      },
    ]);
    console.log('Seeded skills:', skills.length);

    // Seed services
    const services = await Service.insertMany([
      {
        name: 'Web Development',
        description: 'Custom web applications using modern frameworks',
      },
      {
        name: 'Full-Stack Development',
        description: 'End-to-end application development',
      },
      {
        name: 'API Development',
        description: 'RESTful and GraphQL API development',
      },
      {
        name: 'Database Design',
        description: 'Scalable database architecture and optimization',
      },
    ]);
    console.log('Seeded services:', services.length);

    // Seed experience
    const experiences = await Experience.insertMany([
      {
        jobTitle: 'Senior Full Stack Developer',
        company: 'Tech Company Inc',
        description: 'Led development of multiple web applications using React and Node.js',
        startDate: new Date('2021-01-01'),
        currentlyWorking: true,
        location: 'San Francisco, CA',
      },
      {
        jobTitle: 'Full Stack Developer',
        company: 'StartUp LLC',
        description: 'Developed full-stack features for SaaS application',
        startDate: new Date('2019-06-01'),
        endDate: new Date('2020-12-31'),
        location: 'Remote',
      },
    ]);
    console.log('Seeded experiences:', experiences.length);

    // Seed certifications
    const certifications = await Certification.insertMany([
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        issueDate: new Date('2023-01-15'),
      },
      {
        name: 'Full Stack Development Bootcamp',
        issuer: 'Coding Academy',
        issueDate: new Date('2020-06-30'),
      },
    ]);
    console.log('Seeded certifications:', certifications.length);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
