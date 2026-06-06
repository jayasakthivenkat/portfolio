const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  registerAdmin,
  login,
  getCurrentUser,
} = require('../controllers/authController');

router.post('/register', registerAdmin);
router.post('/login', login);
router.get('/me', authenticate, getCurrentUser);

module.exports = router;
