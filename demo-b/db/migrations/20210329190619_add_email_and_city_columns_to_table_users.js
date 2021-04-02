// here we will add 2 additional columns to the users table

exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('email', 30).nullable();
    table.string('city', 20).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('email');
    table.dropColumn('city');
  });
};
