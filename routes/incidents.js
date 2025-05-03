const express = require('express');
const router = express.Router();

const {
  getAllIncidents,
  getIncidentById,
  createIncident,
  deleteIncident
} = require('../controllers/IncidentController');

// Get all reported incidents
router.get('/', getAllIncidents);

// Get a single incident by its ID
router.get('/:id', getIncidentById);

// Create a new incident entry
router.post('/', createIncident);

// Delete an incident by its ID
router.delete('/:id', deleteIncident);

module.exports = router;
