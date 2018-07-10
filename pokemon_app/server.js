
const express = require('express');
const app = express();

// database
const pokemon = require('./models/pokemon');

// index route
app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.listen(3000, () => {
  console.log("Gotta catch em all")
});

















