exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.string('text_content').notNullable();
    table.timestamps(true, true);
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('post_id')
      .references('id')
      .inTable('posts')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
