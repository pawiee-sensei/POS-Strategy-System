// /controllers/authController.js
// Controls the authentication pages and responses.

const authService = require('../services/authService');

module.exports = {
  /**
   * Render login page
   */
  async getLoginPage(req, res) {
    return res.render('auth/login', { title: "Login" });
  },

  /**
   * Render register page
   */
  async getRegisterPage(req, res) {
    return res.render('auth/register', { title: "Register" });
  },

  /**
   * Handle user registration
   */
  async register(req, res) {
    const result = await authService.registerUser(req.body);

    if (!result.success) {
      return res.render('auth/register', {
        title: "Register",
        error: result.message
      });
    }

    return res.redirect('/login');
  },

  /**
   * Handle login
   */
  async login(req, res) {
    const { email, password } = req.body;

    const result = await authService.loginUser(email, password);

    if (!result.success) {
      return res.render('auth/login', {
        title: "Login",
        error: result.message
      });
    }

    // Store user session
    req.session.user = {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email
    };

    return res.redirect('/dashboard');
  },

  /**
   * Logout user
   */
  async logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
};
