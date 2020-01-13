const Sequelize = require('sequelize');
const config = require('@/config');

const connections = {};

module.exports = function(dbname='default') {
	if (!connections[dbname]) {
		connections[dbname] = new Sequelize(config.db[dbname].database, config.db[dbname].username, config.db[dbname].password, {
			dialect: config.db[dbname].dialect,
			host: config.db[dbname].host,
			define: {
				timestamps: false,
			},
			logging: false,
		});
	}
	return {
		connection: connections[dbname],
		import (path) {
			return require('@/models/user')(connections[dbname], Sequelize);
		},
	}
}