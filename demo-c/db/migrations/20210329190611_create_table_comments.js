exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.string('text_content').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
