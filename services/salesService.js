// /services/salesService.js
// Business logic for sales operations

const SalesModel = require('../models/SalesModel');

module.exports = {
  async addSale(data) {
    return await SalesModel.createSale(data);
  },

  async listSales() {
    return await SalesModel.getAllSales();
  }
};
