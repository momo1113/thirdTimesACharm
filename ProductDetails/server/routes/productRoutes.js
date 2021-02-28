const express = require('express');

const router = express.Router();
const axios = require('axios');

const api = require('../../config');

router.get('/:id', (req, res) => {
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

router.get('/:id/styles', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}/styles`, {
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

module.exports = router;
