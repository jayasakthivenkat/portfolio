const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../controllers/skillController');

// Public routes
router.get('/', getAllSkills);
router.get('/:id', getSkillById);

// Admin routes
router.post('/', authenticate, authorize(['admin']), createSkill);
router.put('/:id', authenticate, authorize(['admin']), updateSkill);
router.delete('/:id', authenticate, authorize(['admin']), deleteSkill);

module.exports = router;
