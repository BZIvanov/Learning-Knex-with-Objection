exports.seed = function (knex) {
  return knex('comments')
    .del()
    .then(function () {
      return knex('comments').insert([
        {
          text_content: 'I like nature and trees also.',
          user_id: 2,
          post_id: 1,
        },
        { text_content: 'Yea, it is amazing!', user_id: 2, post_id: 1 },
        { text_content: 'Are there any ships?', user_id: 1, post_id: 2 },
        {
          text_content: 'Guess so, most likely many boats and ships out there.',
          user_id: 3,
          post_id: 2,
        },
        {
          text_content:
            'Yes, of course, actually I was on a vacation last week.',
          user_id: 2,
          post_id: 2,
        },
        { text_content: 'Which park is it?', user_id: 3, post_id: 5 },
        { text_content: 'South Park of course :)', user_id: 1, post_id: 5 },
      ]);
    });
};
