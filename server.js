const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const incidentRoutes = require('./routes/incidents');
require('dotenv').config();

const app = express();

// Initialize MongoDB connection
connectDB();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Route handler for all /incidents API endpoints
app.use('/incidents', incidentRoutes);

// Define server port from .env or fallback to 5000
const PORT = process.env.PORT || 5000;

// Launch the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
