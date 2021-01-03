var mongoose = require('mongoose');

// esquema para alumnos
var PracticaSchema = mongoose.Schema({
    profesor:{type: mongoose.Schema.Types.ObjectId, ref:'profesor',autopopulate:true},
    alumno:{type: mongoose.Schema.Types.ObjectId, ref:'alumnos', autopopulate: true},
    fecha:{type: Date, default:Date.now },
    permiso:String,
});
PracticaSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('practica',PracticaSchema);