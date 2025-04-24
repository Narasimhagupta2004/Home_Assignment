const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const incidentRoutes = require('./routes/incidents');
require('dotenv').config();

const app = express();
connectDB();
app.use(bodyParser.json());
app.use('/incidents', incidentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
