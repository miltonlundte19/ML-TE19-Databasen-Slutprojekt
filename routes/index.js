const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.njk');
});

router.get('/loggin', function (req, res, next) {
    res.render('loggin.njk');
});

module.exports = router;
