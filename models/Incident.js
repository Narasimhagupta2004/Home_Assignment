const mongoose = require('mongoose');

// Define the schema for an Incident
const IncidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,  // Title of the incident
      required: true  // Title is mandatory
    },
    description: {
      type: String,  // Detailed description of the incident
      required: true  // Description is mandatory
    },
    severity: {
      type: String,  // Severity level of the incident (Low, Medium, High)
      enum: ['Low', 'Medium', 'High'],  // Allow only these values
      required: true  // Severity is mandatory
    },
    reported_at: {
      type: Date,  // Timestamp for when the incident was reported
      default: Date.now,  // Set current time as default if not provided
      required: true  // Reported date is mandatory
    }
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Create the model using the schema
const Incident = mongoose.model('Incident', IncidentSchema);

// Export the model for use in other parts of the application
module.exports = Incident;
