require('dotenv').config();
const express = require('express');
require('./db');

const Post = require('./db/models/post');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const postsComments = await Post.query().withGraphFetched('[comments]');

    res.status(200).json({ postsComments });
  } catch (err) {
    res.status(500).json(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
