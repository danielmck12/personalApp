var createError = require('http-errors');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//inport routes
var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');
var subjectRouter = require('./routes/subjects');
var toolsRouter = require('./routes/tools')

var app = express();

//Connect to database
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const DB_URI = process.env.DATABASE_URI;
mongoose.connect(DB_URI)
  .then(() => console.log(`Database connected : ${DB_URI}`))
  .catch(e => console.log(e));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/subjects', subjectRouter);
app.use('/tools', toolsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
