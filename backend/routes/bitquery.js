const express = require('express')
const router = express.Router()
const {ROLE} = require('../config/constant')

const AuthMiddleware = require('../middlewares/Authentication')
const BitqueryController = require('../controllers/BitqueryController.js')

// me
router.get('/track', BitqueryController.getTransactions)

module.exports = router;