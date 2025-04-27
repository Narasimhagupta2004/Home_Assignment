const express = require('express');
const router = express.Router();
// Import controller functions
const { getAllIncidents, getIncidentById, createIncident, deleteIncident } = require('../controllers/IncidentController');

// Route to get all incidents
router.get('/', getAllIncidents);

// Route to get a specific incident by ID
router.get('/:id', getIncidentById);

// Route to create a new incident
router.post('/', createIncident);

// Route to delete an incident by ID
router.delete('/:id', deleteIncident);

// Export the router to be used in the main server file
module.exports = router;

