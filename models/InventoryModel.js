// /models/InventoryModel.js
const pool = require('../config/db');

module.exports = {
  async getAllItems() {
    const sql = `SELECT * FROM inventory ORDER BY created_at DESC`;
    const [rows] = await pool.query(sql);
    return rows;
  },

  async addItem(data) {
    const sql = `
      INSERT INTO inventory (product_name, quantity, cost_price, selling_price, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;
    const params = [
      data.product_name,
      data.quantity,
      data.cost_price,
      data.selling_price
    ];

    const [result] = await pool.query(sql, params);
    return result.insertId;
  },

  async getItemById(id) {
    const sql = `SELECT * FROM inventory WHERE id = ?`;
    const [rows] = await pool.query(sql, [id]);
    return rows[0];
  },

  async updateItem(id, data) {
    const sql = `
      UPDATE inventory
      SET product_name = ?, quantity = ?, cost_price = ?, selling_price = ?
      WHERE id = ?
    `;
    const params = [
      data.product_name,
      data.quantity,
      data.cost_price,
      data.selling_price,
      id
    ];

    await pool.query(sql, params);
  },

  async deleteItem(id) {
    const sql = `DELETE FROM inventory WHERE id = ?`;
    await pool.query(sql, [id]);
  }
};
