// /config/app.js
// Express application setup (middleware, sessions, parsing, views)

const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// =========================
// STATIC FILES (CSS, JS, Images)
// =========================
app.use(express.static(path.join(__dirname, '..', 'public')));

// =========================
// BODY PARSERS
// =========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// SESSION CONFIGURATION
// =========================
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,               // safer cookies
      maxAge: 1000 * 60 * 60 * 24   // 1 day
    }
  })
);

// =========================
// VIEW ENGINE (EJS)
// =========================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

module.exports = app;
