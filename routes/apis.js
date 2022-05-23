const express = require('express');
const router = express.Router();
const pool = require('../database');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res, next) => {
    const username = req.body.U;
    const password = req.body.P;
    if (userisvalid(username) && pasisvalid(password)) {
        await pool
            .promise()
            .query('SELECT * FROM users WHERE name = ?', [username])
            .then((respons) => {
                respons = respons[0][0];
                console.log('hej3');
                bcrypt.compare(
                    password,
                    respons.password,
                    function (err, result) {
                        console.log('hej3-1');
                        if (err) {
                            return res.status(500).json({
                                S: false,
                                F: 'bcrypt'
                            });
                        }
                        console.log(result);
                        if (result) {
                            req.session.loginToken = username;
                            return res.json({
                                S: true,
                                Rd: '/'
                            });
                        }
                    }
                );
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    S: false,
                    F: 'pool'
                });
            });
    }
    res.json({
        S: false
    });
});

function userisvalid(username) {
    if (username.length > 4) {
        return true;
    }
    return false;
}

function pasisvalid(password) {
    if (password.length > 4 && password.match(letters)) {
        return true;
    }
    return false;
}

const letters =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,20}$/;

module.exports = router;
