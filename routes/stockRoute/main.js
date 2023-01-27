const express = require('express');
const router = express.Router();
const stockController = require('../../controllers/stock_controllers/main.js')
// const {authentication} = require('../../middlewares/auth.js')

router.get('/all',stockController.findAll)

module.exports = router;