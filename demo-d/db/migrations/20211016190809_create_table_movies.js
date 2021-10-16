const {
  TABLE_NAMES: { movies },
} = require('../../constants');

exports.up = function (knex) {
  return knex.schema.createTable(movies, (table) => {
    table.increments('id', { primaryKey: true });
    table.string('title', 50).unique().notNullable();
    table.string('genre').notNullable();
    table.integer('year').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(movies);
};
