import Usuario from "../models/users.models.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import Producto from "../models/producto.models.js";
import { productSchema, consultaSchema } from "../schemas/auth.schema.js";
import Consulta from "../models/consulta.models.js";
import { z } from "zod";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";



//agregar a mongo db un nuevo usuario
export const register = async (req, res) => {
  const { email, password, username ,isAdmin} = req.body;
  try {
    //validar usuario ya en uso
    const userFound = await Usuario.findOne({ email });
    if (userFound) return res.status(400).json(["El email ya esta en uso"]);

    const passwordHash = await bcrypt.hash(password, 10); //encriptar la contraseña

    const newUsuario = new Usuario({
      username,
      email,
      password: passwordHash,
      isAdmin // valor encrioptado de contraseña
    });

    const usuarioSaved = await newUsuario.save();
    const token = await createAccessToken({ id: usuarioSaved._id });
    res.cookie("token", token);

    res.json({
      //llamar solo datos requeridos frontend
      id: usuarioSaved._id,
      username: usuarioSaved.username,
      email: usuarioSaved.email,
      createdAt: usuarioSaved.createdAt,
      updatedAt: usuarioSaved.updatedAt,
      isAdmin: usuarioSaved.isAdmin
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login de usuario
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await Usuario.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña Incorrecta" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    res.json({
      //llamar solo datos requeridos frontend
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      isAdmin:userFound.isAdmin
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//agregar nuevo producto
export const ingresarProducto = async (req, res) => {
  try {
    // Validar el cuerpo de la solicitud con el esquema de Zod
    const { codigo, nombre, descripcion, valorporunidad, imagen } =
      productSchema.parse(req.body);

    // Crear el nuevo producto
    const nuevoProducto = new Producto({
      codigo,
      nombre,
      descripcion,
      valorporunidad,
      imagen,
    });

    // Guardar el producto en la base de datos
    await nuevoProducto.save();

    res.json({
      id: nuevoProducto._id,
      codigo: nuevoProducto.codigo,
      nombre: nuevoProducto.nombre,
      descripcion: nuevoProducto.descripcion,
      valorporunidad: nuevoProducto.valorporunidad,
      imagen: nuevoProducto.imagen,
      // Puedes agregar más campos según sea necesario
    });
  } catch (error) {
    // Manejar errores de validación del esquema de Zod
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Error de validación", errors: error.errors });
    }

    // Otros errores
    res.status(500).json({ message: error.message });
  }
};

//obetener productos
export const obtenerListaproductos = async (req, res) => {
  try {
    const listarproductos = await Producto.find();
    res.json(listarproductos);
  } catch (error) {
    console.error("Error al obtener la lista :", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const obtenerconsultas = async (req, res) => {
  try {
    const listarconsultas = await Consulta.find();
    res.json(listarconsultas);
  } catch (error) {
    console.error("Error al obtener la lista :", error);
    res.status(500).send("Error interno del servidor");
  }
};

//ingresar nueva consulta
export const ingresarConsulta = async (req, res) => {
  try {
    // Validar el cuerpo de la solicitud con el esquema de Zod
    const { consultanteNombre, consultanteEmail, consultaDescripcion, estado } =
      consultaSchema.parse(req.body);

    // Crear la nueva consulta
    const nuevaConsulta = new Consulta({
      consultanteNombre,
      consultanteEmail,
      consultaDescripcion,
      estado,
    });

    // Guardar el producto en la base de datos
    await nuevaConsulta.save();

    res.json({
      id: nuevaConsulta._id,
      consultanteNombre: nuevaConsulta.consultanteNombre,
      consultanteEmail: nuevaConsulta.consultanteEmail,
      consultaDescripcion: nuevaConsulta.consultaDescripcion,
      estado: nuevaConsulta.estado,
    });
  } catch (error) {
    // Manejar errores de validación del esquema de Zod
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Error de validación", errors: error.errors });
    }

    // Otros errores
    res.status(500).json({ message: error.message });
  }
};



export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'no autorizado' });

  try {
    const user = verify(token, TOKEN_SECRET);
    const userFound = await user.findById(user.id);
    if (!userFound) return res.status(401).json({ message: 'no autorizado' });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      isAdmin : userFound.isAdmin
    });
  } catch (err) {
    return res.status(401).json({ message: 'no autorizado' });
  }
};

export const actualizarConsulta = async (req, res) => {
  const { id } = req.params; // Obtén el ID de la consulta a actualizar
  const actualizacionDatos = req.body; // Obtén los datos a actualizar

  try {
    // Encuentra la consulta por su ID y actualiza los campos proporcionados
    const consultaActualizada = await Consulta.findByIdAndUpdate(
      id,
      actualizacionDatos,
      { new: true } // Devuelve el documento actualizado
    );

    if (!consultaActualizada) {
      return res.status(404).json({ message: 'Consulta no encontrada' });
    }

    res.json(consultaActualizada);
  } catch (error) {
    console.error('Error al actualizar la consulta:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
