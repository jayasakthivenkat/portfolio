const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  submitContact,
  getAllContacts,
  getContactById,
  replyContact,
  deleteContact,
} = require('../controllers/contactController');

// Public route
router.post('/', submitContact);

// Admin routes
router.get('/', authenticate, authorize(['admin']), getAllContacts);
router.get('/:id', authenticate, authorize(['admin']), getContactById);
router.put('/:id/reply', authenticate, authorize(['admin']), replyContact);
router.delete('/:id', authenticate, authorize(['admin']), deleteContact);

module.exports = router;
