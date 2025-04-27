const Incident = require('../models/Incident');

// Get all incidents
const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find();  // Query the database for all incidents
        res.status(200).json(incidents);  // Send a successful response with all incidents data
    } catch (error) {
        console.error('Error fetching incidents:', error);  // Log error for debugging
        res.status(500).json({ message: 'Server Error' });  // Send error response if something goes wrong
    }
};

// Get a single incident by ID
const getIncidentById = async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);  // Fetch a specific incident from DB by ID
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });  // Return 404 if incident not found
        }
        res.status(200).json(incident);  // Return the found incident in the response
    } catch (error) {
        console.error('Error fetching incident:', error);  // Log error for debugging
        res.status(500).json({ message: 'Server Error' });  // Handle server errors
    }
};

// Create a new incident
const createIncident = async (req, res) => {
    try {
        const { title, description, severity } = req.body;  // Extract data from request body

        // Validate input data
        if (!title || !description || !['Low', 'Medium', 'High'].includes(severity)) {
            return res.status(400).json({ message: 'Invalid data provided' });  // Return 400 for invalid data
        }

        const newIncident = new Incident({ title, description, severity });  // Create a new incident object
        await newIncident.save();  // Save the new incident to the database

        res.status(201).json({
            message: 'Incident created successfully',  // Confirm success
            incident: newIncident  // Return the created incident in response
        });
    } catch (error) {
        console.error('Error creating incident:', error);  // Log error for debugging
        res.status(500).json({ message: 'Server Error' });  // Handle server errors
    }
};

// Delete an incident by ID
const deleteIncident = async (req, res) => {
    try {
        const incident = await Incident.findByIdAndDelete(req.params.id);  // Find and delete incident by ID

        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });  // Return 404 if no incident found
        }

        res.status(200).json({ message: 'Incident deleted successfully' });  // Confirm deletion success
    } catch (error) {
        console.error('Error deleting incident:', error);  // Log error for debugging
        res.status(500).json({ message: 'Server Error' });  // Handle server errors
    }
};

module.exports = { getAllIncidents, getIncidentById, createIncident, deleteIncident };
