const express = require('express');
const router = express.Router();
// const {authentication} = require('../middlewares/auth.js')
const materialRoute = require('./materialRoute/main.js')
const menuRoute = require('./menuRoute/main.js')
const stockRoute = require('./stockRoute/main.js')
const billRoute = require('./billRoute/main.js')

router.use('/material',materialRoute)
router.use('/menu',menuRoute)
router.use('/stock',stockRoute)
router.use('/bill',billRoute)

router.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'resto369',
            version: '0.1.0'
        }
    });

});



module.exports = router;