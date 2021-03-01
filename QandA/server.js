const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let products = [];
const questions = {};

app.get('/products', (req, res) => {
  if (products.length !== 0) {
    res.send(products);
  } else {
    res.send();
  }
});

app.get('/questions/:id', (req, res) => {
  const productId = req.params.id;
  if (questions[productId] === undefined) {
    axios.get(`${api.api}/qa/questions?product_id=${productId}`, {
      headers: {
        Authorization: api.TOKEN,
      },
    })
      .then((response) => {
        questions[productId] = response.data.results;
        res.send(questions);
      })
      .catch((err) => res.send(JSON.stringify(err)));
  } else {
    res.send(questions[productId]);
  }
});

app.get('/q', (req, res) => {
  res.send(questions);
});

app.listen(PORT, () => {
  // console.log(`Server listening in on port ${PORT}`);
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
