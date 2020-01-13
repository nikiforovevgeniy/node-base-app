require('dotenv').config();

const config = require('./index');

module.exports = {
	development: config.db[process.env.SEQUELIZE_CONNECTION],
}