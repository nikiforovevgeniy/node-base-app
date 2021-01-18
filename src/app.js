const passport = require('passport');
const express = require('express');

const app = express();

app.use(express.json());
app.use(passport.initialize());

module.exports = app;
