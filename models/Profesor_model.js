var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// esquema para profesor
var profeSchema = mongoose.Schema({
    //id: { type: ObjectId, required: true },
    dni : { type: String, required: true , unique: true },
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    pass: String,
    root:{type:Boolean, default:false},
    permisos:[]       
});

profeSchema.plugin(uniqueValidator);
module.exports= mongoose.model('profesor',profeSchema);