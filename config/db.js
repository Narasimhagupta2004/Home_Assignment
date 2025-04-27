const mongoose = require('mongoose');

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Log a successful connection with the MongoDB host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch (err) {
    // Log an error message if the connection fails
    console.error(`MongoDB Connection Error: ${err.message}`);
    // Exit the process if the database connection fails
    process.exit(1);  // Exits with a non-zero status to indicate failure
  }
};

// Export the connection function to use it in other parts of the application
module.exports = connectDB;
