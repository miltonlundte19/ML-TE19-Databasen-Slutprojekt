const express = require('express');
const router = express.Router();

router.post('/login', function (req, res, next) {
    console.log(req.body);
    res.json({
        S: true
    });
});

module.exports = router;
