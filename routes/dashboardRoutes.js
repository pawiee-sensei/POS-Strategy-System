// /routes/dashboardRoutes.js
// Routes for the dashboard page

const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');  // ✅ CORRECT

// Dashboard home
router.get('/dashboard', ensureAuthenticated, dashboardController.getDashboard);

module.exports = router;
