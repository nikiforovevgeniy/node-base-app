require('dotenv').config();

module.exports = {
	[process.env.NODE_ENV || 'development']: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_DBNAME || '',
		host: process.env.DB_HOST || 'localhost',
		dialect: process.env.DB_DIALECT || 'mysql',
		storage: process.env.DB_STORAGE || '',
		define: {
			charset: process.env.DB_CHARSET || 'utf8',
			dialectOptions: {
				collate: process.env.DB_COLLATE || 'utf8_general_ci',
			},
			timestamps: process.env.DB_TIMESTAMPS || false,
		},
		logging: process.env.DB_LOGGING || false,
	}
}