// /routes/salesRoutes.js
// Sales pages and form submission

const express = require('express');
const router = express.Router();

const salesController = require('../controllers/salesController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

// Show all sales
router.get('/sales', ensureAuthenticated, salesController.getSalesPage);

// Show add sale page
router.get('/sales/add', ensureAuthenticated, salesController.getAddSalePage);

// Handle add sale form submission
router.post('/sales/add', ensureAuthenticated, salesController.postAddSale);

module.exports = router;
