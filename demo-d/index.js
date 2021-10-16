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
    const watchMovieList = await User.query()
      .withGraphJoined('[wantToWatch]')
      .debug();

    res.status(200).json({ watchMovieList });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post('/', async (req, res) => {
  const { username, email, title, genre, year, isListed } = req.body;

  const trx = await User.startTransaction();

  try {
    const user = await User.query(trx).insert({ username, email });

    // the title for the movie is set to be unique and in case this check fails we will also revert saving the user data even if it was correct
    const movie = await Movie.query(trx).insert({ title, genre, year });

    if (isListed) {
      // here we still provide the trx variable to have access to the temporary id's
      await WatchList.query(trx).insert({
        user_id: user.id,
        movie_id: movie.id,
      });
    }

    const watchMovieList = await User.query(trx)
      .withGraphJoined('[wantToWatch]')
      .where('users.id', user.id);

    // if we got to here without errors we will store the user, the movie and the watchlist
    await trx.commit();

    res.status(200).json({ watchMovieList });
  } catch (error) {
    // if any error happened in the try block we will revert everything we were trying to save in the database
    await trx.rollback();

    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
