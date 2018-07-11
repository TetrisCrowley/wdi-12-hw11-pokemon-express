
const express = require('express');
const app = express();

// database
const Pokemon = require('./models/pokemon');

app.use(express.static('public'));

// index route
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

// show route
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
  });
});

app.listen(3000, () => {
  console.log("Gotta catch em all")
});

















