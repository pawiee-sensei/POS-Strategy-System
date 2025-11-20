// /routes/authRoutes.js
// Routes for login, register, and logout

const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const redirectIfAuthenticated = require('../middleware/redirectIfAuthenticated');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

// Show login page
router.get('/login', redirectIfAuthenticated, authController.getLoginPage);

// Show register page
router.get('/register', redirectIfAuthenticated, authController.getRegisterPage);

// Handle registration
router.post('/register', authController.register);

// Handle login
router.post('/login', authController.login);

// Logout
router.get('/logout', ensureAuthenticated, authController.logout);

module.exports = router;
