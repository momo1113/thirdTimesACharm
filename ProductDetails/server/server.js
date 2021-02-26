const express = require('express');

const app = express();

const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Successfully run port on 3000');
  }
});
