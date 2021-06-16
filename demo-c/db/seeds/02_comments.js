exports.seed = function (knex) {
  return knex('comments')
    .del()
    .then(function () {
      return knex('comments').insert([
        { text_content: 'I like nature and trees also.' },
        { text_content: 'Yea, it is amazing!' },
        { text_content: 'Are there any ships?' },
        {
          text_content: 'Guess so, most likely many boats and ships out there.',
        },
        {
          text_content:
            'Yes, of course, actually I was on a vacation last week.',
        },
        { text_content: 'Which park is it?' },
        { text_content: 'South Park of course :)' },
        { text_content: 'Some heavy commenting going on.' },
        { text_content: 'July, best month in the world' },
      ]);
    });
};
