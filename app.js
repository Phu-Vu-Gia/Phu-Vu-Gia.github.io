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

// Home endpoint
app.get('/', function (req, res) {
  res.render('index');
});

// Meal endpoint
app.get('/meal/:name', function (req, res) {
  res.render('meal');
});

// Start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on: http://localhost:${PORT}`);
});
