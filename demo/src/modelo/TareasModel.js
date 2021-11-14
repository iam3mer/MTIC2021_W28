const mongoose = require('mongoose');
const {Schema} = mongoose;

const TareaSchema = new Schema({
  titulo: {type: String, require: true},
  tiempo: {type: Number, require: true},
  responsable: {type: String, require: true},
  descripcion: {type: String, require: false}
});

module.exports = mongoose.model('Tarea', TareaSchema);
