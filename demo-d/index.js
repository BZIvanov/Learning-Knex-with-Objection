require('dotenv').config();
const express = require('express');
require('./db');

const User = require('./db/models/user');
const Movie = require('./db/models/movie');
const WatchList = require('./db/models/watch_list');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const watchMovieList = await User.query().withGraphJoined('[wantToWatch]');

    res.status(200).json({ watchMovieList });
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
