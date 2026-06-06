const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAbout,
  updateAbout,
} = require('../controllers/aboutController');

// Public route
router.get('/', getAbout);

// Admin route
router.put('/', authenticate, authorize(['admin']), updateAbout);

module.exports = router;
