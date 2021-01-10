var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prof_model = require('../models/Profesor_model.js');
const bcrypt = require("bcryptjs");
const jwt =  require('jwt-simple');

/* loguin por profesor*/

router.post('/', async(req,res)=>{
  
  const profesor = await Prof_model.findOne({dni: req.body.dni});
  
  if(profesor){
    const iguales = bcrypt.compareSync(req.body.pass,profesor.pass);
    if(iguales){
      res.status(200).json({success: createToken(profesor)});
    }else{
    res.status(500).json({error: 'Contraseña incorrecta'});
    }
  }else{
  res.status(500).json({error: 'Contraseña incorrecta'});
  }

});

const createToken = (profesor) =>{

  const payload = {
    profesorId: profesor.id,
    profesorDNI: profesor.dni  
  }

  return jwt.encode(payload, 'practicas 2021 eduardo');
}

module.exports = router;