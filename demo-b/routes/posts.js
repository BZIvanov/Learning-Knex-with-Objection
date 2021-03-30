const router = require('express').Router();
const { createPost } = require('../controllers/posts');

router.route('/').post(createPost);

module.exports = router;
