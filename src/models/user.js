const bcrypt = require('bcrypt');
const bookshelf = require('@/bookshelf');

const user = bookshelf.model('User', {
	tableName: 'users',
	hidden: [
		'password',
	],
	validatePassword (password) {
		return bcrypt.compare(password, this.get('password'));
	},
});

module.exports = user;