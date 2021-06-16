exports.up = function (knex) {
  return knex.schema.createTable('post_comments', (table) => {
    table.increments('id');
    table.timestamps(true, true);
    table
      .integer('post_id')
      .references('id')
      .inTable('posts')
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('comment_id')
      .references('id')
      .inTable('comments')
      .notNullable()
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('post_comments');
};
