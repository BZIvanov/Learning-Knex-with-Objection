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
}

module.exports = Post;
