const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const nunjucks = require('nunjucks');
const session = require('express-session');

require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apisRouter = require('./routes/apis');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: 'sassMiddlewarehej',
        resave: false,
        saveUninitialized: true,
        cookie: { sameSite: true }
    })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apisRouter);

module.exports = app;
