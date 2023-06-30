require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth.js');

var app = express();


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect(process.env.MongoDBKey, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));

passport.initialize()
require('./strategies/jwtStrategy.js');
require('./strategies/localStrategy.js');

app.use('/users', usersRouter);
app.use('/auth', authRouter);

module.exports = app;
