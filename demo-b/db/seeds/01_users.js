exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { name: 'Irina' },
        { name: 'Ani' },
        { name: 'Momchil' },
      ]);
    });
};
