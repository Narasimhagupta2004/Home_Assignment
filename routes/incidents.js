const express = require('express');
const router = express.Router();
const { getAllIncidents, getIncidentById, createIncident, deleteIncident} = require('../controllers/IncidentController');

router.get('/', getAllIncidents);
router.get('/:id', getIncidentById);
router.post('/', createIncident);
router.delete('/:id', deleteIncident);

module.exports = router;
