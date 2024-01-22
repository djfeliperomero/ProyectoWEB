import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        trim: true,
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true, 
    },
    valorporunidad: {
        type: Number,
        required: true, 
        min: 0, 
    },
    imagen: {
        type: String,
    },
});

export default mongoose.model('Producto', productoSchema);

