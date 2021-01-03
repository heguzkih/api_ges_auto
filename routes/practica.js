var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Practica_model = require('../models/Practica_model.js'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  Practica_model.find().sort('fecha').exec(function(err,practicainfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(practicainfo);

  });
});

/* GET users for id. */
router.get('/:id', function(req, res, next) {
  Practica_model.findById(req.params.id,function(err,practicainfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(practicainfo);
  });
});

/* post alumno. */
router.post('/', function(req, res, next) {
 Practica_model.create(req.body, function(err,practicainfo){
   if(err) res.status(500).send(err);
   else res.sendStatus(200);
 });
});

/* put alumno por id. */
router.put('/:dni', function(req, res,next){
  Practica_model.findOneAndUpdate({dni:req.params.dni},req.body,function(err,practicainfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete alumno por dni */
router.delete('/:id', function(req, res, next) {
  Practica_model.findByIdAndDelete(req.params.id,function(err,practicainfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});


module.exports = router;
