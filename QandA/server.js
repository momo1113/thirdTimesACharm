const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let products = [];

app.get('/products/', (req, res) => {
  if (products.length !== 0) {
    res.send(products);
  }
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      products = response.data;
    })
    .catch((err) => console.log(err));
});
