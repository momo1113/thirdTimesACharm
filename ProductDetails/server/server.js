const express = require('express');

const app = express();

const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const api = require('../config');

const PORT = 3000;
app.use(express.static(path.join(__dirname, '../public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

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

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Successfully run port on 3000');
  }
});
