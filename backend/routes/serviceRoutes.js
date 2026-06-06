const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Admin routes
router.post('/', authenticate, authorize(['admin']), createService);
router.put('/:id', authenticate, authorize(['admin']), updateService);
router.delete('/:id', authenticate, authorize(['admin']), deleteService);

module.exports = router;
