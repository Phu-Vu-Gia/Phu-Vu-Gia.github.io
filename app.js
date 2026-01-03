// To enable the .env
require('dotenv').config();
require('./db/mongoose');

// App setup
const express = require('express');
const path = require('path');
const app = express();

// Serve Static Files
app.use(express.static("public"));

// View Templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view", "partials"));

// Import Plan model
const Plan = require('./db/planModel');

// Home endpoint
app.get('/', async (req, res) => {
  try {
    const plans = await Plan.findOne();
    res.render('index', { meals: plans ? plans.meals : [] });
  } catch (err) {
    console.error('Error fetching plans:', err);
    res.render('index', { meals: [] });
  }
});

// Meal endpoint
app.get('/meal/:name', async (req, res) => {
  try {
    const mealName = req.params.name;
    const plan = await Plan.findOne({ 'meals.name': mealName });
    const meal = plan ? plan.meals.find(m => m.name === mealName) : null;
    res.render('meal', { meal });
  } catch (err) {
    console.error('Error fetching meal:', err);
    res.render('meal', { meal: null });
  }
});

// Start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on: http://localhost:${PORT}`);
});
