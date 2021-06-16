exports.seed = function (knex) {
  return knex('post_comments')
    .del()
    .then(function () {
      return knex('post_comments').insert([
        { post_id: 1, comment_id: 1 },
        { post_id: 1, comment_id: 2 },
        { post_id: 2, comment_id: 3 },
        { post_id: 2, comment_id: 4 },
        { post_id: 3, comment_id: 5 },
        { post_id: 3, comment_id: 6 },
        { post_id: 3, comment_id: 7 },
        { post_id: 4, comment_id: 8 },
        { post_id: 4, comment_id: 9 },
      ]);
    });
};
