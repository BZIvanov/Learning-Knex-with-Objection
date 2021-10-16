const {
  TABLE_NAMES: { users, movies, watch_list },
} = require('../../constants');

exports.up = function (knex) {
  return knex.schema.createTable(watch_list, (table) => {
    table.increments('id', { primaryKey: true });
    table
      .integer('user_id')
      .references('id')
      .inTable(users)
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('movie_id')
      .references('id')
      .inTable(movies)
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(watch_list);
};
