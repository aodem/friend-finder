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