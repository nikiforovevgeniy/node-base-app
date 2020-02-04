const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express')();

express.use(bodyParser.json());
express.use(passport.initialize());

module.exports = express;