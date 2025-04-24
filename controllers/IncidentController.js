const Incident = require('../models/Incident');

const getAllIncidents = async(req,res) =>{
    const incidents = await Incident.find();
    res.status(200).json(incidents);
};

const getIncidentById = async(req,res) =>{
    const incident = await Incident.findById(req.paramsid);
    if(!incident) return res.status(404).send('Incident Not Found');
    res.status(200).json(incident);
};

const createIncident = async(req,res) =>{
    const {title,description,severity} = req.body;
    if(!title || !description || !['Low','Medium','High'].includes(severity)){
        return res.status(400).json({message: 'invalid data'});
    }

    const incident = new Incident({title,description,severity});
    await incident.save();
    res.status(201).json(incident);
};

const deleteIncident = async(req,res) =>{
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if(!incident){
         return res.status(404).json({message : 'Incident not Found'});
    }
}

module.exports = {getAllIncidents ,getIncidentById , createIncident, deleteIncident };