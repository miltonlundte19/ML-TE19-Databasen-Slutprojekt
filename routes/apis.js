const express = require('express');
const router = express.Router();
const pool = require('../database');
// const bcrypt = require('bcrypt');

router.post('/login', async (req, res, next) => {
    console.log(req.body);
    const username = req.body.U;
    const password = req.body.P;
    console.log(username, password);
    console.log('hej');
    if (userisvalid(username) && pasisvalid(password)) {
        console.log('hej1');
        await pool
            .promes()
            .query('SELECT * FROM users WHERE name = ?', [username])
            .then((respons) => {
                console.log('hej2');
                console.log(respons);
                console.log('hej3');
            });
    }
    res.json({
        S: true
    });
});

function userisvalid(username) {
    console.log('1');
    console.log(username.length);
    if (username.length > 4) {
        console.log('1-1');
        return true;
    }
    console.log('1-2');
    return false;
}

function pasisvalid(password) {
    console.log('2');
    if (password.length > 4 && password.match(letters)) {
        console.log('2-1');
        return true;
    }
    console.log('2-2');
    return false;
}

const letters = /^[0-9a-zA-Z]+$/;

module.exports = router;
