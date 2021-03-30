exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    // increments by default is creating the column as primary key so no need to add it, this just as example
    table.increments('id', { primaryKey: true });
    table.string('title', 30).notNullable();
    table.string('body').notNullable();
    table.timestamps(true, true);
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
