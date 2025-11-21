// /routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

router.get('/inventory', ensureAuthenticated, inventoryController.getInventoryPage);

router.get('/inventory/add', ensureAuthenticated, inventoryController.getAddItemPage);
router.post('/inventory/add', ensureAuthenticated, inventoryController.postAddItem);

router.get('/inventory/edit/:id', ensureAuthenticated, inventoryController.getEditItemPage);
router.post('/inventory/edit/:id', ensureAuthenticated, inventoryController.postEditItem);

router.get('/inventory/delete/:id', ensureAuthenticated, inventoryController.deleteItem);

module.exports = router;
