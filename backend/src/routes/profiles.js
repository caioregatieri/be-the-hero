const express = require('express')

const ProfileValidations = require('./validations/profiles')
const ProfileController = require('../controllers/ProfileController')

const Router = express.Router()

Router.get('/', ProfileValidations.get(), ProfileController.index)

module.exports = Router