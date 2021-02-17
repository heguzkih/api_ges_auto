var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Practica_model = require('../models/Practica_model.js'); 

/* GET practica listing. */
router.get('/', function(req, res, next) {
  Practica_model.find().sort('fecha').exec(function(err,practicainfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(practicainfo);

  });
});

/* GET practica for id. */
router.get('/:id', function(req, res, next) {
  Practica_model.findById(req.params.id,function(err,practicainfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(practicainfo);
  });
});

/* post practica. */
router.post('/', function(req, res, next) {
 Practica_model.create(req.body, function(err,practicainfo){
   if(err) res.status(500).send(err);
   else res.sendStatus(200);
 });
});

/* put practica por id. */
router.put('/:id', function(req, res,next){
  Practica_model.findByIdAndUpdate(req.params.id,req.body,function(err,practicainfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete practica por dni */
router.delete('/:id', function(req, res, next) {
  Practica_model.findByIdAndDelete(req.params.id,function(err,practicainfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});


module.exports = router;
