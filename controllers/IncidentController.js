const Incident = require('../models/Incident');

// Retrieve all incidents from the database
const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Retrieve a specific incident by its ID
const getIncidentById = async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });
        }
        res.status(200).json(incident);
    } catch (error) {
        console.error('Error fetching incident:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Create and store a new incident entry
const createIncident = async (req, res) => {
    try {
        const { title, description, severity } = req.body;

        // Basic validation to ensure required fields are present and severity is valid
        if (!title || !description || !['Low', 'Medium', 'High'].includes(severity)) {
            return res.status(400).json({ message: 'Invalid data provided' });
        }

        const newIncident = new Incident({ title, description, severity });
        await newIncident.save();

        res.status(201).json({
            message: 'Incident created successfully',
            incident: newIncident
        });
    } catch (error) {
        console.error('Error creating incident:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete an existing incident by its ID
const deleteIncident = async (req, res) => {
    try {
        const incident = await Incident.findByIdAndDelete(req.params.id);
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });
        }

        res.status(200).json({ message: 'Incident deleted successfully' });
    } catch (error) {
        console.error('Error deleting incident:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllIncidents,
    getIncidentById,
    createIncident,
    deleteIncident
};
