module.exports = {
	port: process.env.SERVER_PORT || 8010,
	db: {
		default: {
			host: process.env.DB_HOST || 'localhost',
			username: process.env.DB_USER || 'root',
			password: process.env.DB_PASSWORD || '',
			database: process.env.DB_DBNAME || '',
			dialect: process.env.DB_DIALECT || 'mysql',
			charset: process.env.DB_CHARSET || 'utf8',
			collate: process.env.DB_COLLATE || 'utf8_general_ci',
			storage: process.env.DB_STORAGE || '',
		},
	}
}