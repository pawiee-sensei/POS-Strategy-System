// server.js
require('dotenv').config();

const app = require('./config/app');
const pool = require('./config/db');
const inventoryRoutes = require('./routes/inventoryRoutes');

// =========================
// TEST DATABASE CONNECTION
// =========================
(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();

// =========================
// ROUTES
// =========================
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const salesRoutes = require('./routes/salesRoutes');

// Mount routes
app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', salesRoutes);
app.use('/', inventoryRoutes);

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
