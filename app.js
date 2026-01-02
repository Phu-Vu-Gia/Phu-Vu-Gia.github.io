// To enable the .env
require('dotenv').config();

// App setup
const express = require('express');
const app = express();

// Home endpoint
app.get('/', function (req, res) {
  res.render('index');
});

// Meal endpoint
app.get('/meal/:name', function (req, res) {
  res.render('meal');
});

// Start the server
const port = 3000;

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
