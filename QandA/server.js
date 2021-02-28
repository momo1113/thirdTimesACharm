const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let storage = [];

app.get('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      storage = response.data;
      res.send('Success');
    })
    .catch((err) => res.send(err));
});

app.get('/products/3', (req, res) => {
  if (storage.length !== 0) {
    res.send(storage);
  }
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
});
