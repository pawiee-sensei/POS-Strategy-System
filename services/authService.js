// /services/authService.js
// Business logic for authentication (register, login)

const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');
const errorHandler = require('../utils/errorHandler');

module.exports = {
  /**
   * Register new user
   */
  async registerUser(data) {
    try {
      const existingUser = await UserModel.findByEmail(data.email);
      if (existingUser) {
        return { success: false, message: "Email already exists." };
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Save user in DB
      const userId = await UserModel.createUser({
        name: data.name,
        email: data.email,
        password: hashedPassword
      });

      return {
        success: true,
        message: "Registration successful.",
        userId
      };

    } catch (err) {
      return errorHandler(err);
    }
  },

  /**
   * Login user
   */
  async loginUser(email, password) {
    try {
      const user = await UserModel.findByEmail(email);

      if (!user) {
        return { success: false, message: "Invalid email or password." };
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return { success: false, message: "Invalid email or password." };
      }

      return {
        success: true,
        message: "Login successful.",
        user
      };

    } catch (err) {
      return errorHandler(err);
    }
  }
};
