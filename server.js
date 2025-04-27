const express = require('express');  // Import express framework for building the server
const bodyParser = require('body-parser');  // Import body-parser to parse incoming request bodies
const connectDB = require('./config/db');  // Import the database connection function
const incidentRoutes = require('./routes/incidents');  // Import the routes for handling incidents
require('dotenv').config();  // Load environment variables from the .env file

const app = express();  // Create an Express app instance

connectDB();  // Establish a connection to the MongoDB database

// Middleware to parse JSON bodies in incoming requests
app.use(bodyParser.json());

// Set up the /incidents endpoint to use the incidentRoutes for handling incident-related requests
app.use('/incidents', incidentRoutes);

// Define the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the Express server on the defined port and log a success message
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
