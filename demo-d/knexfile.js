require('dotenv').config();
const { join } = require('path');

const migrationsPath = join(__dirname, 'db', 'migrations');
const seedsPath = join(__dirname, 'db', 'seeds');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: migrationsPath,
    },
    seeds: {
      directory: seedsPath,
    },
  },
};
