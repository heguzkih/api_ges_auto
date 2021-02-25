var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const middlewares = require('./routes/middlewares');
var indexRouter = require('./routes/index');
var alumnoRouter = require('./routes/alumno');
var profesorRoute = require('./routes/profesor');
var practicaRoute = require('./routes/practica');
var loguinRoute = require('./routes/loguin');

//modificacion eduardo para conexion con monngoose y variavle de entorno en .env
require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
        .then(()=> console.log('conexion correcta'))
        .catch((err)=> console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*redireciona a las distintas rutas*/
app.use('/', indexRouter);
app.use('/alumno',middlewares.checkLoguin, alumnoRouter);
app.use('/profesor',middlewares.checkLoguin,profesorRoute);
app.use('/practica',middlewares.checkLoguin, practicaRoute);
app.use('/loguin',loguinRoute);
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
