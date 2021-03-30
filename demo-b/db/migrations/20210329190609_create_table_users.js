exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    // the second parameter is max length
    table.string('name', 30).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
