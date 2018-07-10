
const express = require('express');
const app = express();

// database
const Pokemon = require('./models/pokemon');

// index route
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

app.listen(3000, () => {
  console.log("Gotta catch em all")
});

















