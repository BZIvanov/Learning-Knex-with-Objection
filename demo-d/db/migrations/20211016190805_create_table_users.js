const {
  TABLE_NAMES: { users },
} = require('../../constants');

exports.up = function (knex) {
  return knex.schema.createTable(users, (table) => {
    table.increments('id', { primaryKey: true });
    table.string('username', 30).unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('city').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(users);
};
