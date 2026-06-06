const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceController');

// Public routes
router.get('/', getAllExperiences);
router.get('/:id', getExperienceById);

// Admin routes
router.post('/', authenticate, authorize(['admin']), createExperience);
router.put('/:id', authenticate, authorize(['admin']), updateExperience);
router.delete('/:id', authenticate, authorize(['admin']), deleteExperience);

module.exports = router;
