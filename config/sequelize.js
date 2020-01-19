require('dotenv').config();

const config = require('./index');

module.exports = {
	development: config.db[process.env.SEQUELIZE_DB_DEVELOPMENT || 'default'],
	production: config.db[process.env.SEQUELIZE_DB_PRODUCTION || 'default'],
}