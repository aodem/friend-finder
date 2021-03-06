// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

module.exports = (app) => {
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}