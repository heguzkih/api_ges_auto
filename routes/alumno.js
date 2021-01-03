var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Alum_model = require('../models/Alum_model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Alum_model.find().sort('nombre').exec(function(err,alumnoinfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(alumnoinfo);

  });
});

/* GET users for id. */
router.get('/:id', function(req, res, next) {
  Alum_model.findById(req.params.id,function(err,alumnoinfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(alumnoinfo);
  });
});

/* post alumno. */
router.post('/', function(req, res, next) {
 Alum_model.create(req.body, function(err,alumnoinfo){
   if(err) res.status(500).send(err);
   else res.sendStatus(200);
 });
});

/* put alumno por id. */
router.put('/:dni', function(req, res,next){
  Alum_model.findOneAndUpdate({dni:req.params.dni},req.body,function(err,alumnoinfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete alumno por dni */
router.delete('/:id', function(req, res, next) {
  Alum_model.findByIdAndDelete(req.params.id,function(err,alumnoinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});


module.exports = router;
