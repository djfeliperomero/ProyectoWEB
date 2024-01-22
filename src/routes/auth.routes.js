import { Router } from "express";
import { login, register, ingresarProducto, obtenerListaproductos,obtenerconsultas , ingresarConsulta, actualizarConsulta, verifyToken } from '../controllers/auth.controller.js';

import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema ,productSchema , consultaSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/registrarproducto', validateSchema(productSchema),ingresarProducto);
router.get('/listarproductos', obtenerListaproductos);
router.get('/listarconsultas',obtenerconsultas);
router.post('/registrarconsulta', validateSchema(consultaSchema),ingresarConsulta);
router.get('/verify', verifyToken);
router.put('/actualizarconsulta/:id', actualizarConsulta);

export default router;