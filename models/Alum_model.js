var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// esquema para alumnos
var alumSchema = mongoose.Schema({
    //id: { type: ObjectId, required: true },
    dni : { type: String, required: true , unique: true },
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    fecha_nacimiento: Date,
    centro_reconocimiento: String,
    sexo: String,
    lugar_nacimiento:String,
    nacionalidad: String,
    lentes:{type:Boolean, default:false},
    condiciones_restrictivas:{type:Boolean, default:false},
    validez_limitada:{type:Boolean, default:false},
    permiso_que_solicita:String,
    direccion: String
        

});
alumSchema.plugin(uniqueValidator);
module.exports= mongoose.model('alumnos',alumSchema);