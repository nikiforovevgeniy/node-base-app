const Sequelize = require('sequelize');
const databases = require('@/config/database');

const connections = {};

module.exports = function(dbname, dialect='mysql') {
	if (!connections[dbname]) {
		const {database, user, password, host} = databases[dbname];

		connections[dbname] = new Sequelize(database, user, password, {
			dialect,
			host,
			define: {
				timestamps: false,
			},
			logging: false,
		});
	}
	return connections[dbname];
}