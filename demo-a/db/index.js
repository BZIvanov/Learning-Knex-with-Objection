const knex = require('knex');
const { Model } = require('objection');
const knexfile = require('../knexfile');

// here we will connect Objection with Knex
const db = knex(knexfile.development);
Model.knex(db);
