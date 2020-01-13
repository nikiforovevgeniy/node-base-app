module.exports = {
	port: process.env.SERVER_PORT || 8010,
	db: {
		default: {
			host: process.env.DB_HOST || 'localhost',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASSWORD || '',
			database: process.env.DB_DB || '',
			dialect: process.env.DB_DIALECT || 'mysql',
		},
	}
}