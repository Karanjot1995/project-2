const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/api_controller')


router.get('/', ApiController.apiController)

module.exports = router 