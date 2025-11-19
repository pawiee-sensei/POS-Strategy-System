// /routes/indexRoutes.js
// Main homepage route handler

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Homepage
router.get('/', indexController.getHomePage);

module.exports = router;
