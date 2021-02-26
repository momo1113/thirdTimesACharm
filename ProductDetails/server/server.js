const express = require('express');

const app = express();

const path = require('path');
const axios = require('axios');
const api = require('../config');

const PORT = 3000;
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Successfully run port on 3000');
  }
});
