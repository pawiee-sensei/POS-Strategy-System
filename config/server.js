// /server.js
// Main entry point. Starts the Express server and loads environment variables.

require('dotenv').config();
const app = require('./config/app');
const pool = require('./config/db');

// Verify DB connection at startup
(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();

// Load Routes (will add more as system grows)
app.get('/', (req, res) => {
  res.render('index', { title: "POS Business Strategy System" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
