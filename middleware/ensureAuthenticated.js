// /middleware/ensureAuthenticated.js
// Blocks access to pages that require login.

module.exports = function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // User is logged in → allow access
  }

  // Not logged in → redirect to login page
  return res.redirect('/login');
};
