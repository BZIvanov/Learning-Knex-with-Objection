const {
  TABLE_NAMES: { watch_list },
} = require('../../constants');

exports.seed = function (knex) {
  return knex(watch_list)
    .del()
    .then(function () {
      return knex(watch_list).insert([
        { user_id: 1, movie_id: 1 },
        { user_id: 2, movie_id: 1 },
        { user_id: 2, movie_id: 2 },
      ]);
    });
};
