const express = require('express');
const router = express.Router();
const menuController = require('../../controllers/menu_controllers/main.js')
// const {authentication} = require('../../middlewares/auth.js')

router.get('/all',menuController.findAll)

module.exports = router;