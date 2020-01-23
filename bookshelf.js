const { database } = require('@/config');

const knex = require('knex')(database);
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;