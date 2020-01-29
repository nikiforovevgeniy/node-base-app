---
to: controllers/<%= h.inflection.pluralize(name) %>.js
---
const { body } = require('express-validator');
const { <%= Name %> } = require('@/models');

module.exports = {

	validationRules: {
		//
	},

	async getAll (req, res, next) {
		const <%= h.inflection.pluralize(name) %> = await <%= Name %>.fetchAll();
		res.json(<%= h.inflection.pluralize(name) %>);
	},

	async getOne ({ params: { id } }, res, next) {
		const <%= name %> = await <%= Name %>.forge({id}).fetch();
		res.json(<%= name %>);
	},

	async create ({ body: {tags, ...data} }, res, next) {
		const <%= name %> = await <%= Name %>.forge().save(data);
		res.json(<%= name %>);
	},

	async update ({ params: { id }, body: {tags, ...data} }, res, next) {
		const <%= name %> = await <%= Name %>.forge({id}).save(data);
		res.json(<%= name %>);
	},

	async remove ({ params: { id } }, res, next) {
		const <%= name %> = await <%= Name %>.forge({id});
		res.json({id});
	},

}