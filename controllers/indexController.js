// /controllers/indexController.js
// Controls what happens when the homepage is accessed.

module.exports = {
  /**
   * Render the main homepage
   */
  async getHomePage(req, res) {
    try {
      return res.render('index', {
        title: "POS Business Strategy System",
        session: req.session || null
});

    } catch (error) {
      console.error("Homepage Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  }
};
