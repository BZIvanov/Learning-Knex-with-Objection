const { Model } = require('objection');

class PostComments extends Model {
  static get tableName() {
    return 'post_comments';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['post_id', 'comment_id'],
      properties: {
        id: { type: 'integer' },
        post_id: { type: 'integer' },
        comment_id: { type: 'integer' },
      },
    };
  }
}

module.exports = PostComments;
