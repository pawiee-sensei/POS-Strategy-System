// /config/app.js
// Express application setup with middleware, parsers, sessions, and global settings.

const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// Static file serving
app.use(express.static(path.join(__dirname, '..', 'public')));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessions (for authentication, user tracking, etc.)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
  })
);

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

module.exports = app;
