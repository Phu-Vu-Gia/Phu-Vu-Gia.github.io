const { mongoose } = require('./mongoose');

// Define the meal schema
const mealSchema = new mongoose.Schema({
  // Your work starts here
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
});

// Create the plan model
const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;
