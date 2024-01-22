import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema({
  consultanteNombre: {
    type: String,
    required: true
  },
  consultanteEmail: {
    type: String,
    required: true
  },
  consultaDescripcion: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['sin revisar', 'revisado'],
    default: 'sin revisar'
  }
});

export default mongoose.model('Consulta', consultaSchema);
