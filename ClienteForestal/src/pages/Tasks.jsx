import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {RegistrarConsulta,RegistrarProducto,ListarconsultaRequest,ActualizarConsultaRequest} from "../api/auth";
import { useAuth } from "../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faSearch,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import logoImage from "../image/Logo.png";
import FooterImage from "../image/FOOTER.png";


const TareaPage = () => {
  const [currentPage, setCurrentPage] = useState("inicio");
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  //Obtener Consultas
  const [obtenerconsulta, setObtenerconsulta] = useState([]);
  useEffect(() => {
    const obtenerconsulta = async () => {
      try {
        const response = await ListarconsultaRequest();
        console.log("Respuesta del servidor:", response);

        if (Array.isArray(response.data)) {
          setObtenerconsulta(response.data);
        } else {
          console.error(
            "La respuesta no contiene una lista válida de productos:",
            response
          );
        }
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    // Llama a la función para obtener productos cuando el componente se monta
    obtenerconsulta();
    console.log(obtenerconsulta);
  }, []); // El segundo argumento [] significa que este efecto

  const { user } = useAuth();
  console.log(user);

  const handleActualizarConsulta = async (consultaId) => {
    try {
      const nuevoEstado = 'revisado';
    
      // Llama a la función ActualizarConsultaRequest con el ID de la consulta y el nuevo estado
      await ActualizarConsultaRequest(consultaId, nuevoEstado);
    
      // Filtra la lista para excluir la consulta revisada
      const nuevasConsultas = obtenerconsulta.filter((consulta) => consulta._id !== consultaId);
      setObtenerConsulta(nuevasConsultas);
    
      console.log('Consulta actualizada y eliminada con éxito');
    } catch (error) {
      console.error('Error al actualizar la consulta:', error);
    }
  };
  

  const handleNavigation = (page) => {
    if (page === "logout") {
      const isConfirmed = window.confirm("¿Estás seguro de que quieres salir?");

      if (isConfirmed) {
        navigate("/");
      }
    } else {
      setCurrentPage(page);
    }
  };

  const onSubmitConsulta = async (data) => {
    try {
      const response = await RegistrarConsulta(data);
      if (response && response.status === 200) {
        alert("Consulta enviada correctamente");
      } else {
        alert("Error al enviar la consulta");
      }
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
      alert("Error al enviar la consulta");
    }
  };

  const onSubmitProducto = async (data) => {
    // Parsear el valor a número
    data.valorporunidad = parseFloat(data.valorporunidad);

    try {
      const response = await RegistrarProducto(data);
      if (response && response.status === 200) {
        alert("Producto registrado correctamente");
        reset();
      } else {
        alert("Error al registrar el producto");
      }
    } catch (error) {
      console.error("Error al registrar el producto:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
      alert("Error al registrar el producto");
    }
  };

  useEffect(() => {
    // Si hay un usuario definido, establece el valor del campo de correo electrónico
    if (user) {
      setValue("consultanteEmail", user.email);
    }
  }, [user, setValue]);

  return (
    <div>
      {/* Barra de Navegación */}
      <Navbar
        expand="lg"
        variant="light"
        style={{ backgroundColor: "white", borderBottom: "1px solid #ddd" }}
      >
        <div className="container">
          <Navbar.Brand as={Link} style={{ color: "black", padding: "10px" }}>
            <img
              src={logoImage}
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {user && (
            <Nav className="mr-auto">
              <Nav.Link disabled className="nav-link">
                ¡Hola {user.username}!
              </Nav.Link>
            </Nav>
          )}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginLeft: "10px" }}
          />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "10px" }}>
            <Nav as="ul" className="mr-auto">
              {user && user.isAdmin && (
                <li
                  className={`nav-item ${
                    currentPage === "agregarProducto" ? "active" : ""
                  }`}
                >
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={() => handleNavigation("agregarProducto")}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ marginRight: "5px" }}
                    />
                    Agregar Producto
                  </Link>
                </li>
              )}

              {user && user.isAdmin && (
                <li
                  className={`nav-item ${
                    currentPage === "VerConsultas" ? "active" : ""
                  }`}
                >
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={() => handleNavigation("VerConsultas")}
                  >
                    <FontAwesomeIcon
                      icon={faList}
                      style={{ marginRight: "5px" }}
                    />
                    Ver Consultas
                  </Link>
                </li>
              )}

              <li
                className={`nav-item ${
                  currentPage === "generarConsulta" ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleNavigation("generarConsulta")}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ marginRight: "5px" }}
                  />
                  Generar Consulta
                </Link>
              </li>

              <li
                className={`nav-item ${
                  currentPage === "perfil" ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleNavigation("perfil")}
                >
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ marginRight: "5px" }}
                  />
                  Perfil
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => handleNavigation("logout")}
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{ marginRight: "5px" }}
                  />
                  Salir
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div style={{ marginTop: "50px", marginBottom: "300px" }}>
        {currentPage === "agregarProducto" && (
          <div className="container mt-5">
            <h2 className="text-center mb-4">Agregar Producto</h2>
            <p className="text-center">
              Administrador ! Aqui puedes agregar nuevos productos a la base de
              datos.
            </p>
            <Form onSubmit={handleSubmit(onSubmitProducto)}>
              <Form.Group controlId="codigo">
                <Form.Label>Código:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("codigo", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("nombre", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="descripcion">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("descripcion", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="valorporunidad">
                <Form.Label>Valor por Unidad:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("valorporunidad", {
                    required: true,
                  })}
                />
              </Form.Group>

              <Form.Group controlId="imagen">
                <Form.Label>Imagen URL:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("imagen", { required: true })}
                />
              </Form.Group>

              <div className="text-center mt-3">
                <Button variant="primary" type="submit">
                  Crear Producto
                </Button>
              </div>
            </Form>
            <hr></hr>
            <p className="text-center">
              Gracias por agregar nuevos productos, vuelve Pronto !
            </p>
          </div>
        )}

        {currentPage === "VerConsultas" && (
          <div className="container mt-5">
            <h2 className="text-center mb-4">Ver Consultas</h2>
            <p className="text-center">
              Aquí puedes visualizar y revisar las consultas realizadas por los
              usuarios.
            </p>
            {obtenerconsulta.map((consulta) => (
              <div key={consulta._id} className="consulta-item">
                <div className="consulta-info">
                  <p>
                    <strong>Nombre:</strong> {consulta.consultanteNombre}
                  </p>
                  <p>
                    <strong>Correo Electrónico:</strong>{" "}
                    {consulta.consultanteEmail}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {consulta.consultaDescripcion}
                  </p>
                </div>
                <div className="consulta-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleActualizarConsulta(consultaId)}
                  >
                    Revisado
                  </button>
                </div>
                <hr />
              </div>
            ))}
            <p className="text-center">¡Gracias por revisar las consultas!</p>
          </div>
        )}

        {currentPage === "generarConsulta" && (
          <div className="container mt-5">
            <h2 className="text-center mb-4">Generar Consulta</h2>
            <p className="text-center">
              Hola! Aqui puedes ingresar todas tus consultas.
            </p>
            <Form onSubmit={handleSubmit(onSubmitConsulta)}>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  {...register("consultanteNombre", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico:</Form.Label>
                <Form.Control
                  type="email"
                  {...register("consultanteEmail", {
                    required: true,
                    defaultValue: user ? user.email : "",
                  })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="descripcion">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("consultaDescripcion", { required: true })}
                />
              </Form.Group>

              <div className="text-center mt-3">
                <Button variant="primary" type="submit">
                  Enviar Consulta
                </Button>
              </div>
            </Form>

            <div className="mt-4 text-center">
              <p>
                Una vez realizada tu consulta, nos pondremos en contacto contigo
                a través del correo electrónico proporcionado.
              </p>
              <p>
                Nuestro equipo de atención al cliente está comprometido en
                brindarte la mejor asistencia posible. Si tienes alguna pregunta
                adicional o necesitas ayuda inmediata, no dudes en comunicarte
                con nosotros a través de nuestro servicio de atención al cliente
                disponible las 24 horas, los 7 días de la semana.
              </p>
            </div>
          </div>
        )}

        {currentPage === "perfil" && (
          <div className="container mt-5">
            <h2 className="text-center mb-4">Actualizar Perfil</h2>
            <p className="text-center">
              Aqui puedes actualizar tus datos personales.{" "}
            </p>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nuevo nombre de usuario"
                  {...register("nuevoUsername", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nuevo correo electrónico"
                  {...register("nuevoEmail", { required: true })}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Nueva Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nueva contraseña"
                  {...register("nuevaContraseña", { required: true })}
                />
              </Form.Group>

              <p>
                Todos los cambios serán aplicados una vez cierre y vuelva
                iniciar sesión.
              </p>

              <div className="text-center mt-3">
                <Button variant="primary" type="submit">
                  Actualizar Perfil
                </Button>
              </div>
            </Form>
          </div>
        )}

        {currentPage === "logout" && (
          <div>
            <p>¿Estás seguro de que quieres salir?</p>
            <button onClick={() => handleNavigation("inicio")}>Cancelar</button>
            <button onClick={() => handleNavigation("logout")}>Aceptar</button>
          </div>
        )}

        {currentPage === "inicio" && (
          <div className="container mt-5">
            <h2 className="text-center mb-4">
              ¡Bienvenido Usuario {user && user.username}!
            </h2>
            <p className="text-center">
              Aquí podrás generar tus consultas y gestionar tu perfil.
            </p>
          </div>
        )}
      </div>

      {/* Pie de página */}
      <footer
        className="text-center position-relative"
        style={{ marginTop: "20px" }}
      >
        <img src={FooterImage} alt="Footer" className="img-fluid w-100" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <p style={{ color: "white" }}>
            &copy; 2024 My Website. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TareaPage;
