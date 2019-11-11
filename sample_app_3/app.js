var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ログイン画面
var loginRouter = require('./routes/login');
// 新規登録画面
var registerRouter = require('./routes/register');
// 登録完了・ログイン後画面
var confirmRouter = require('./routes/confirm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// トップ画面
app.use('/', indexRouter);
app.post('/', indexRouter, function (req, res, next) {
  next('login')
});

app.use('/users', usersRouter);

// ログイン画面
app.use('/login', loginRouter);
app.post('/login', loginRouter, function (req, res, next) {
  next('confirm')
})
// 新規登録画面
app.use('/register', registerRouter);
app.post('/register', registerRouter, function (req, res, next) {
  next('confirm')
})
// 登録完了・ログイン後画面
app.use('/confirm', confirmRouter);

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
