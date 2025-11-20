// /models/SalesModel.js
// Handles database queries for sales

const pool = require('../config/db');

module.exports = {
  // Insert new sale record
  async createSale(data) {
    const sql = `
      INSERT INTO sales (product_name, quantity, price, total, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;
    const params = [data.product_name, data.quantity, data.price, data.total];
    const [result] = await pool.query(sql, params);
    return result.insertId;
  },

  // Fetch all sales
  async getAllSales() {
    const sql = `SELECT * FROM sales ORDER BY created_at DESC`;
    const [rows] = await pool.query(sql);
    return rows;
  }
};
