// /controllers/dashboardController.js

module.exports = {
  async getDashboard(req, res) {
    try {
      const user = req.session.user;   // <-- IMPORTANT

      return res.render('dashboard', {
        title: "Dashboard",
        user: user || {}               // <-- FIXED
      });

    } catch (error) {
      console.error("Dashboard Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  }
};
