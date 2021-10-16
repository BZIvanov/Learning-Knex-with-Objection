const {
  TABLE_NAMES: { users },
} = require('../../constants');

exports.seed = function (knex) {
  return knex(users)
    .del()
    .then(function () {
      return knex(users).insert([
        { username: 'Iva', email: 'iva@mail.com', city: 'Sofia' },
        { username: 'Toni', email: 'toni@mail.com' },
      ]);
    });
};
