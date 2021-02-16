var mongoose = require('mongoose');

// esquema para alumnos
var PracticaSchema = mongoose.Schema({
    //id: { type: ObjectId, required: true },
    profesor:{type: mongoose.Schema.Types.ObjectId, ref:'profesor',autopopulate:true},
    alumno:{type: mongoose.Schema.Types.ObjectId, ref:'alumnos', autopopulate: true},
    fechaFin:{type: Date, default:Date.now},
    fechaInicio:{type: Date, default:Date.now },
    comentario:String,
    permiso:String,
});
PracticaSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('practica',PracticaSchema);