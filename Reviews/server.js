const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const path = require('path');
const keys = require('./config.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/reviews', (req, res) => {
  const prodId = req.body.id;

  axios({
    method: 'get',
    url: `${keys.api}/reviews/?product_id=${prodId}`,
    headers: {
      Authorization: keys.key,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
