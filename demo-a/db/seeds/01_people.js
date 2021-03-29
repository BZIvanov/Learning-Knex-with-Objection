exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('people')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { name: 'Irina', city: 'Sofia', income: 5700 },
        { name: 'Ani', city: 'Velingrad', income: 5200 },
      ]);
    });
};
