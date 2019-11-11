var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ログイン画面
var login = require('./routes/login');
// 新規登録画面
var register = require('./routes/register');
// 登録完了・ログイン後画面
var confirm = require('./routes/confirm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.post('/login', function (req, res, next) {
  next('login')
});

app.use('/users', usersRouter);
// ログイン画面
app.use('/login', login);
// 新規登録画面
app.use('/register', register);
// 登録完了・ログイン後画面
app.use('/confirm', confirm);

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
