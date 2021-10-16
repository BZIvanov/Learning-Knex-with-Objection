const { Model } = require('objection');
const {
  TABLE_NAMES: { users, movies, watch_list },
} = require('../../constants');

class User extends Model {
  static get tableName() {
    return users;
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'email'],
      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 30 },
        email: {
          type: 'string',
          pattern: '^[A-Za-z0-9]+@[A-Za-z0-9]+.[a-z]{2,3}$',
        },
        city: { type: ['string', null] },
      },
    };
  }

  static get relationMappings() {
    const Movie = require('./movie');

    return {
      wantToWatch: {
        relation: Model.ManyToManyRelation,
        modelClass: Movie,
        join: {
          from: `${users}.id`,
          through: {
            from: `${watch_list}.user_id`,
            to: `${watch_list}.movie_id`,
          },
          to: `${movies}.id`,
        },
      },
    };
  }
}

module.exports = User;
