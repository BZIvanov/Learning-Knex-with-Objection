const { Model } = require('objection');
const {
  TABLE_NAMES: { watch_list },
} = require('../../constants');

class WatchList extends Model {
  static get tableName() {
    return watch_list;
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'movie_id'],
      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        movie_id: { type: 'integer' },
      },
    };
  }
}

module.exports = WatchList;
