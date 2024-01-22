import axios from "./axios";



export const RegisterRequest = user => axios.post(`/register`,user)

export const loginRequest = user => axios.post(`/login`, user)

export const ListarRequest = () => axios.get(`/listarproductos`);

export const ListarconsultaRequest = () => axios.get(`/listarconsultas`);

export const RegistrarConsulta = consulta => axios.post(`/registrarconsulta`, consulta)

export const RegistrarProducto = producto => axios.post(`/registrarproducto`, producto)

export const verityTokenRequest = () => axios.get(`/verify`)

export const ActualizarConsultaRequest = (consultaId) => axios.put(`/actualizarconsulta/${consultaId}`);