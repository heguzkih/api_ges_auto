var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prof_model = require('../models/Profesor_model.js');
const bcrypt = require("bcryptjs");

/* GET profesor listing. */
router.get('/', function(req, res, next) {
  Prof_model.find().sort('nombre').exec(function(err,profesorInfo){
      if(err)res.status(500).send(err);
      else res.status(200).json(profesorInfo);

  });
});

/* GET profesor for id. */
router.get('/:id', function(req, res, next) {
  Prof_model.findById(req.params.id,function(err,profesorInfo){
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

/* put profesor por id. */
router.put('/:dni', function(req, res,next){
  Prof_model.findOneAndUpdate({dni:req.params.dni},req.body,function(err,profesorInfo){
    if(err)res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* delete profesor por dni */
router.delete('/:id', function(req, res, next) {
  Prof_model.findByIdAndDelete(req.params.id,function(err,profesorInfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* loguin por profesor*/

router.post('/loguin', async(req,res)=>{
  const profesor = await Prof_model.findOne({dni: req.body.dni});
  
  if(profesor){
    
    const iguales = bcrypt.compareSync(req.body.pass, profesor.pass);
     
    if(iguales){
      
      res.json({error: 'ok log'});

    }else{

      res.json({error: 'error 1'});
    }

  }else{
    res.json({error: ver});
    
    
    
  }
 
 
});


module.exports = router;
