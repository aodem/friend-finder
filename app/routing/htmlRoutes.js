import { dirname } from "path";

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

module.export = (app) => {
    app.get('/survey', (req, res) => {
        res.sendfile(path.join(_dirname, "../public/survey.html"))
    });
    app.get("*", (req, res) => {
      res.sendfile(path.join(_dirname, "../public/home.html"));
    });
}