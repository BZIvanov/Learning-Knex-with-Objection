const { Model } = require('objection');

class Comment extends Model {
  static get tableName() {
    return 'comments';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text_content'],
      properties: {
        id: { type: 'integer' },
        text_content: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    const Post = require('./post');

    return {
      comments: {
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: 'comments.id',
          through: {
            from: 'post_comments.comment_id',
            to: 'post_comments.post_id',
          },
          to: 'posts.id',
        },
      },
    };
  }
}

module.exports = Comment;
