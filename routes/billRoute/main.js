const express = require('express');
const router = express.Router();
const billController = require('../../controllers/bill_controllers/main.js')
// const {authentication} = require('../../middlewares/auth.js')

router.get('/all',billController.findAll)
router.post('/createNewBill',billController.createNewBill)
router.post('/addBillMenu/:id',billController.addBillMenu)


module.exports = router;