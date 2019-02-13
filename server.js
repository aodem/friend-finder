// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require('express');
const path = require('path');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

const app = express();

//setting default port unless otherwise suppied

const PORT = process.env.PORT || 3000;

//setting up our basic middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// listener defined

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
