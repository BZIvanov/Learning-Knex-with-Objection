const { Model } = require('objection');
const {
  TABLE_NAMES: { movies },
} = require('../../constants');

class User extends Model {
  static get tableName() {
    return movies;
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'genre', 'year'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 50 },
        genre: { enum: ['action', 'comedy', 'fantasy'] },
        year: {
          type: 'integer',
          minimum: 2000,
          maximum: new Date().getFullYear(),
        },
      },
    };
  }
}

module.exports = User;
