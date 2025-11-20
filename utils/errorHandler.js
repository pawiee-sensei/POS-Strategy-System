// /utils/errorHandler.js
// Standardized error output for controllers & services.

module.exports = function (error) {
  console.error("ERROR:", error);

  return {
    success: false,
    message: "An unexpected error occurred.",
    details: process.env.NODE_ENV === "development" ? error.message : undefined
  };
};
