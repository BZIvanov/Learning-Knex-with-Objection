const { Model } = require('objection');

class Post extends Model {
  static get tableName() {
    return 'posts';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'body'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 30 },
        body: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    const Comment = require('./comment');

    return {
      comments: {
        relation: Model.ManyToManyRelation,
        modelClass: Comment,
        join: {
          from: 'posts.id',
          through: {
            from: 'post_comments.post_id',
            to: 'post_comments.comment_id',
          },
          to: 'comments.id',
        },
      },
    };
  }
}

module.exports = Post;
