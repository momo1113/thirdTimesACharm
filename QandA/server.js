const express = require('express');
const path = require('path');
const axios = require('axios');
const api = require('./config.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products/:id', (req, res) => {
  axios.get(`${api.api}/products`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
});
