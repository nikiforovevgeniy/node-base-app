const express = require('@/express');

let server = null;

module.exports = (() => {
	if (!server) {
		server = require('http').Server(express);
	}
	return server;
})();