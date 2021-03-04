const express = require('express');
const axios = require('axios');
const path = require('path');
const keys = require('./config.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

// 14932
app.get('/reviews', (req, res) => {
  const prodId = req.query.id;
  axios({
    method: 'get',
    url: `${keys.api}/reviews/?product_id=${prodId}&count=10&sort=relevant`,
    headers: {
      Authorization: keys.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.get('/meta', (req, res) => {
  const prodId = req.query.id;
  axios({
    method: 'get',
    url: `${keys.api}/reviews/meta/?product_id=${prodId}`,
    headers: {
      Authorization: keys.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.post('/newReview', (req, res) => {
  const newReview = req.body;
  axios({
    method: 'post',
    url: `${keys.api}/reviews`,
    data: newReview,
    headers: {
      Authorization: keys.TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    });
});

app.put('/helpful', (req, res) => {
  console.log(req.body.id)
  const reviewId = req.body.id;
  axios({
    method: 'put',
    url: `${keys.api}/reviews/${reviewId}/helpful`,
    params: {review_id: reviewId},
    headers: {
      Authorization: keys.TOKEN,
    },
  })
    .then(response => {
      console.log(response)
    })
});

app.put('/report', (req, res) => {
  console.log(req.body.id)
  const reviewId = req.body.id;
  axios({
    method: 'put',
    url: `${keys.api}/reviews/${reviewId}/report`,
    params: {review_id: reviewId},
    headers: {
      Authorization: keys.TOKEN,
    },
  })
    .then(response => {
      console.log(response)
    })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
