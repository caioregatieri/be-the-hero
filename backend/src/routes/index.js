const express = require('express');
const Router = express.Router();

Router.use('/sessions', require('./sessions'))

Router.use('/ongs', require('./ongs'))

Router.use('/profiles', require('./profiles'))

Router.use('/incidents', require('./incidents'))

Router.use('*', (request, response) => response.status(404).json("route not found"))

module.exports = Router