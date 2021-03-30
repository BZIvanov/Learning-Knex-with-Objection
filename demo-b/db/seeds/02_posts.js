exports.seed = function (knex) {
  return knex('posts')
    .del()
    .then(function () {
      return knex('posts').insert([
        { title: 'Green wood', body: 'Amazing forest and trees.', user_id: 1 },
        { title: 'Blue ocean', body: 'Crystal clear ocean water.', user_id: 2 },
        { title: 'Blue Sky', body: 'Amazing for walk outside.', user_id: 2 },
        {
          title: 'Ocean view',
          body: 'Enjoying the view sitting on a balcony.',
          user_id: 2,
        },
        {
          title: 'Summer wind',
          body: 'Amazing walk in the park nearby.',
          user_id: 1,
        },
      ]);
    });
};
