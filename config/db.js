const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'pos_business_system',
  port: 3306, // IMPORTANT: change this to the port shown in phpMyAdmin
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
});

module.exports = pool;
