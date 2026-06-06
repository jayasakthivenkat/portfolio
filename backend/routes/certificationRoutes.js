const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllCertifications,
  getCertificationById,
  createCertification,
  updateCertification,
  deleteCertification,
} = require('../controllers/certificationController');

// Public routes
router.get('/', getAllCertifications);
router.get('/:id', getCertificationById);

// Admin routes
router.post('/', authenticate, authorize(['admin']), createCertification);
router.put('/:id', authenticate, authorize(['admin']), updateCertification);
router.delete('/:id', authenticate, authorize(['admin']), deleteCertification);

module.exports = router;
