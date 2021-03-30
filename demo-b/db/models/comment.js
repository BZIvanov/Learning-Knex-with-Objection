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
      required: ['text_content', 'user_id', 'post_id'],
      properties: {
        id: { type: 'integer' },
        text_content: { type: 'string', minLength: 1, maxLength: 255 },
        user_id: { type: 'integer' },
        post_id: { type: 'integer' },
      },
    };
  }
}

module.exports = Comment;
