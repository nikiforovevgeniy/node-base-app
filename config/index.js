const database = require('@/config/database');

module.exports = {
	port: process.env.SERVER_PORT || 8010,
	database,
}