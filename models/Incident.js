const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema(
  {
    title: {                                          //required: true means mandatory need to give the input
      type: String,
      required: true  // Incident must have a title
    },
    description: {
      type: String,
      required: true  // A detailed description is mandatory for context
    },
    severity: {
      type: String,
      enum: ['Low', 'Medium', 'High'],  // Restrict values to predefined severity levels
      required: true
    },
    reported_at: {
      type: Date,
      default: Date.now,  // Defaults to the current time incident happened
      required: true
    }
  },
  {
    timestamps: true  // Adds createdAt and updatedAt fields automatically
  }
);

const Incident = mongoose.model('Incident', IncidentSchema);

module.exports = Incident;
