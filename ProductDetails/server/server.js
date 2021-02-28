const express = require('express');

const app = express();

const path = require('path');
const axios = require('axios');

const api = require('../config');

const PORT = 3000;
app.use(express.static(path.join(__dirname, '../public')));

// get basic product detail
app.use('/products/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`${api.api}/products/${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Could\'n find the data your found'));
});

// get basic product style
app.use('/styles', (req, res) => {
  const { id } = req.params;
  console.log(id);

  axios.get(`${api.api}/products/14807/styles`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Bad'));
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Successfully run port on 3000');
  }
});
