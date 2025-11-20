// /models/UserModel.js
// Handles all database queries related to users.

const pool = require('../config/db');

module.exports = {
  /**
   * Find a user by email
   */
  async findByEmail(email) {
    const sql = `SELECT * FROM users WHERE email = ? LIMIT 1`;
    const [rows] = await pool.execute(sql, [email]);
    return rows[0] || null;
  },

  /**
   * Create a new user
   */
  async createUser({ name, email, password }) {
    const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [name, email, password]);
    return result.insertId;
  }
};
