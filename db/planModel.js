const { mongoose } = require('./mongoose');

// Define the meal schema
const mealSchema = new mongoose.Schema({
  // Your work starts here
  name: {
    type: String,
    require: true
  },
  timeOfDay: {
    type: String,
    require: true
  },
  mealType: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  }
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
  name: {
    type: String,
    required: true
  }
});

// Create the plan model
const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;
