const Post = require('../db/models/post');

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.query().insert(req.body);

    res.status(201).json({ post });
  } catch (err) {
    res.status(500).json(err);
  }
};
