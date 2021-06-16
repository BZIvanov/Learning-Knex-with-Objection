require('dotenv').config();
const express = require('express');
require('./db');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Works');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
