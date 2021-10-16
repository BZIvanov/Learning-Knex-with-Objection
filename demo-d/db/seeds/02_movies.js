const {
  TABLE_NAMES: { movies },
} = require('../../constants');

exports.seed = function (knex) {
  return knex(movies)
    .del()
    .then(function () {
      return knex(movies).insert([
        { title: 'Action movie', genre: 'action', year: 2021 },
        { title: 'Funny movie', genre: 'comedy', year: 2020 },
      ]);
    });
};
