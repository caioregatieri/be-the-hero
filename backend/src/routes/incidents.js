const express = require('express')

const IncidentValidations = require('./validations/incidents')
const IncidentController = require('../controllers/IncidentController')

const Router = express.Router()

Router.get('/', IncidentValidations.get(), IncidentController.index)

Router.post('/', IncidentValidations.post(), IncidentController.create)


module.exports = Router