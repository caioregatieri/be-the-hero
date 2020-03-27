const express = require('express')

const SessionValidations = require('./validations/sessions')
const SessionController = require('../controllers/SessionController')

const Router = express.Router()

Router.post('/', SessionValidations.post(), SessionController.create)

module.exports = Router