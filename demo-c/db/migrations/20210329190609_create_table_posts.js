exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id', { primaryKey: true });
    table.string('title', 30).notNullable();
    table.string('body').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
