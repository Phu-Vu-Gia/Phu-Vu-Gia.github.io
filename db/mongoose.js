// To enable the .env
require('dotenv').config();

const mongoose = require('mongoose');

// Replace the placeholders with your MongoDB Atlas connection string details
// Change <sid> to your real student id, e.g., 2024b_final_v1234567

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) =>
    console.error('Error connecting to MongoDB Atlas', err)
  );

module.exports = { mongoose };
