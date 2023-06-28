require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var usersRouter = require('./routes/users');

var app = express();

// Use 'Random User' id for the mean time
app.use('/users', (req, res, next) => {
    req.id = '649beb8bfbafd9813d6c0969';
    next();
})

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDBKey, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));

app.use('/users', usersRouter);

module.exports = app;
