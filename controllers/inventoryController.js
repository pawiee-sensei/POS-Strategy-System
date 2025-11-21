// /controllers/inventoryController.js
const inventoryService = require('../services/inventoryService');

module.exports = {
  async getInventoryPage(req, res) {
    try {
      const items = await inventoryService.listItems();
      return res.render('inventory/list', {
        title: "Inventory",
        items
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },

  async getAddItemPage(req, res) {
    res.render('inventory/add', { title: "Add Inventory Item" });
  },

  async postAddItem(req, res) {
    try {
      const data = {
        product_name: req.body.product_name,
        quantity: req.body.quantity,
        cost_price: req.body.cost_price,
        selling_price: req.body.selling_price
      };

      await inventoryService.addItem(data);
      return res.redirect('/inventory');
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },

  async getEditItemPage(req, res) {
    const item = await inventoryService.getItem(req.params.id);
    return res.render('inventory/edit', {
      title: "Edit Item",
      item
    });
  },

  async postEditItem(req, res) {
    try {
      const data = {
        product_name: req.body.product_name,
        quantity: req.body.quantity,
        cost_price: req.body.cost_price,
        selling_price: req.body.selling_price
      };

      await inventoryService.updateItem(req.params.id, data);
      return res.redirect('/inventory');
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },

  async deleteItem(req, res) {
    try {
      await inventoryService.deleteItem(req.params.id);
      return res.redirect('/inventory');
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
};
