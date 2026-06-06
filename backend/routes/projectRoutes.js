const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');

// Public routes
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Admin routes
router.post('/', authenticate, authorize(['admin']), createProject);
router.put('/:id', authenticate, authorize(['admin']), updateProject);
router.delete('/:id', authenticate, authorize(['admin']), deleteProject);

module.exports = router;
