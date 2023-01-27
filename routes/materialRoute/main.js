const express = require('express');
const router = express.Router();
const materialController = require('../../controllers/material_controllers/main.js')
// const {authentication} = require('../../middlewares/auth.js')

router.get('/all',materialController.findAll)

module.exports = router;