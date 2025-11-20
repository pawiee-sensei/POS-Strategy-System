// /controllers/salesController.js
// Controls sales routes

const salesService = require('../services/salesService');

module.exports = {
  // Show sales list page
  async getSalesPage(req, res) {
    try {
      const sales = await salesService.listSales();
      return res.render('sales/list', {
        title: "Sales Records",
        sales
      });
    } catch (error) {
      console.error("Sales List Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  // Add sale page
  async getAddSalePage(req, res) {
    return res.render('sales/add', {
      title: "Add Sale"
    });
  },

  // Handle sale submission
  async postAddSale(req, res) {
    try {
      const { product_name, quantity, price } = req.body;
      const total = quantity * price;

      await salesService.addSale({ product_name, quantity, price, total });

      return res.redirect('/sales');
    } catch (error) {
      console.error("Add Sale Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }
};
