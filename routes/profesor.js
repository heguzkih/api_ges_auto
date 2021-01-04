var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prof_model = require('../models/Profesor_model.js');
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Prof_model.find().sort('nombre').exec(function(err,profesorInfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(profesorInfo);

  });
});

/* GET users for id. */
router.get('/:id', function(req, res, next) {
  Prof_model.findById(req.params.id,function(err,profesorInfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(profesorInfo);
  });
});

/* post alumno. */
router.post('/', function(req, res, next) {
    req.body.pass= bcrypt.hashSync(req.body.pass,10)
   Prof_model.create(req.body, function(err,profesorInfo){
   if(err) res.status(500).send(err);
   else res.sendStatus(200);
 });
});

/* put alumno por id. */
router.put('/:dni', function(req, res,next){
  Prof_model.findOneAndUpdate({dni:req.params.dni},req.body,function(err,profesorInfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete alumno por dni */
router.delete('/:id', function(req, res, next) {
  Prof_model.findByIdAndDelete(req.params.id,function(err,profesorInfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});


module.exports = router;
