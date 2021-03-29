exports.up = function (knex) {
  return knex.schema.createTable('people', (table) => {
    table.increments('id');
    table.text('name').notNullable();
    table.text('city').defaultTo('Sofia');
    table.integer('income').defaultTo(5000);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('people');
};
