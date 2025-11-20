// /middleware/redirectIfAuthenticated.js

module.exports = function redirectIfAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return res.redirect('/dashboard');
  }
  return next();
};
