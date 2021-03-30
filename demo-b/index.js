require('dotenv').config();
const express = require('express');
require('./db');
const postsRoutes = require('./routes/posts');

const app = express();

app.use(express.json());

app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
