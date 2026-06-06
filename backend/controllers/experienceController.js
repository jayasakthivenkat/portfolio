const Experience = require('../models/Experience');

// Get all experiences
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json({ success: true, experiences });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single experience
const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ success: true, experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create experience
const createExperience = async (req, res) => {
  try {
    const { jobTitle, company, description, startDate, currentlyWorking } = req.body;

    if (!jobTitle || !company || !description || !startDate) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const experience = await Experience.create(req.body);

    res.status(201).json({ success: true, message: 'Experience created', experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update experience
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.json({ success: true, message: 'Experience updated', experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete experience
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ success: true, message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
