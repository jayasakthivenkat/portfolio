const Project = require('../models/Project');

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};

    if (category) query.category = category;
    if (featured !== undefined) query.featured = featured === 'true';

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single project
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create project (Admin only)
const createProject = async (req, res) => {
  try {
    const { title, description, shortDescription, technologies, link, github, category, featured } = req.body;

    if (!title || !description || !shortDescription) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const project = await Project.create({
      title,
      description,
      shortDescription,
      image: req.file?.filename || null,
      technologies,
      link,
      github,
      category,
      featured,
    });

    res.status(201).json({ success: true, message: 'Project created', project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update project (Admin only)
const updateProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updateData = {
      ...req.body,
      image: req.file?.filename || project.image,
    };

    project = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, message: 'Project updated', project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete project (Admin only)
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
