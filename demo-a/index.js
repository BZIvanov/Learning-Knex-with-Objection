require('dotenv').config();
const express = require('express');
require('./db');
const People = require('./db/models/people');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const people = await People.query();

    res.status(200).json({ count: people.length, people });
  } catch (err) {
    res.status(500).json(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
