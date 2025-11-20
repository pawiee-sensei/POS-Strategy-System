// /middleware/ensureAuthenticated.js

module.exports = function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // User is logged in → allow access
  }

  // User NOT logged in
  return res.redirect('/login');
};
