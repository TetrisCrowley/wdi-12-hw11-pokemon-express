const express = require('express');
const app = express();


app.get('/pokemon/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.listen(3000, () => {
  console.log("Gotta catch em all")
});

















