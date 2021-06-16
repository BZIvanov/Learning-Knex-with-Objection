exports.seed = function (knex) {
  return knex('posts')
    .del()
    .then(function () {
      return knex('posts').insert([
        { title: 'Green wood', body: 'Amazing forest and trees.' },
        { title: 'Blue ocean', body: 'Crystal clear ocean water.' },
        { title: 'Blue Sky', body: 'Amazing for walk outside.' },
        {
          title: 'Ocean view',
          body: 'Enjoying the view sitting on a balcony.',
        },
        { title: 'Summer wind', body: 'Amazing walk in the park nearby.' },
      ]);
    });
};
