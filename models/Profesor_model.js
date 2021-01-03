var mongoose = require('mongoose');

// esquema para profesor
var profeSchema = mongoose.Schema({
    dni : String,
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    pass: String,
    permisos:[]       
});

module.exports= mongoose.model('profesor',profeSchema);