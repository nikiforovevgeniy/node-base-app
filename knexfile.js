require('module-alias/register');
require('dotenv').config();

const { database } = require('@/config');

module.exports = database;