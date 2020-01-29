---
to: models/<%= name %>.js
---
const bookshelf = require('@/bookshelf');

const <%= name %> = bookshelf.model('<%= name %>', {
	tableName: '<%= h.inflection.pluralize(name) %>',
});

module.exports = <%= name %>;