const Certification = require('../models/Certification');

// Get all certifications
const getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ issueDate: -1 });
    res.json({ success: true, certifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single certification
const getCertificationById = async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json({ success: true, certification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create certification
const createCertification = async (req, res) => {
  try {
    const { name, issuer, issueDate } = req.body;

    if (!name || !issuer || !issueDate) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const certification = await Certification.create(req.body);

    res.status(201).json({ success: true, message: 'Certification created', certification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update certification
const updateCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }

    res.json({ success: true, message: 'Certification updated', certification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete certification
const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json({ success: true, message: 'Certification deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllCertifications,
  getCertificationById,
  createCertification,
  updateCertification,
  deleteCertification,
};
