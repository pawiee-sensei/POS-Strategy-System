// /services/inventoryService.js
const InventoryModel = require('../models/InventoryModel');

module.exports = {
  async listItems() {
    return await InventoryModel.getAllItems();
  },

  async addItem(data) {
    return await InventoryModel.addItem(data);
  },

  async getItem(id) {
    return await InventoryModel.getItemById(id);
  },

  async updateItem(id, data) {
    return await InventoryModel.updateItem(id, data);
  },

  async deleteItem(id) {
    return await InventoryModel.deleteItem(id);
  }
};
