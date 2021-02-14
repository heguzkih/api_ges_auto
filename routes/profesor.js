var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prof_model = require('../models/Profesor_model.js');
const bcrypt = require("bcryptjs");
const jwt =  require('jwt-simple');
const moment = require('moment');

/* GET profesor listing. */
router.get('/', function(req, res, next) {
  Prof_model.find().sort('nombre').exec(function(err,profesorInfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(profesorInfo);

  });
});

/* GET profesor for id. */
router.get('/:dni', function(req, res, next) {
  Prof_model.findOne({dni:req.params.dni},function(err,profesorInfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(profesorInfo);
  });
});

/* post profesor. */
router.post('/', function(req, res, next) {
   req.body.pass= bcrypt.hashSync(req.body.pass,10)
   Prof_model.create(req.body, function(err,profesorInfo){
   if(err) res.status(500).send(err);
   else res.sendStatus(200);
 });
});

/* put profesor por dni. */
router.put('/:dni', function(req, res,next){
  Prof_model.findOneAndUpdate({dni:req.params.dni},req.body,function(err,profesorInfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete profesor por id */
router.delete('/:dni', function(req, res, next) {
  Prof_model.findOne({dni:req.params.dni},function(err,profesorInfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});



module.exports = router;
