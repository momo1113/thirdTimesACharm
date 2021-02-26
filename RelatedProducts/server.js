const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const api = require('./config');

app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));

// id: 14034
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

// get all products
app.get('/products', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
