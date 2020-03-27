const express = require('express')

const OngValidations = require('./validations/ongs')
const OngController = require('../controllers/OngController')

const Router = express.Router()

Router.get('/', OngController.index)

Router.post('/', OngValidations.post(), OngController.create)

module.exports = Router