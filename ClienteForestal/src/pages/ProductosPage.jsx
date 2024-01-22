import React, { useState, useEffect } from "react";
import { Navbar, Nav, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListarRequest } from "../api/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import FooterImage from "../image/FOOTER.png"
import logoImage from "../image/Logo.png";
import bannerImage1 from "../image/BANNER1.png"; // Ruta relativa a la ubicación del componente
import bannerImage2 from "../image/BANNER2.png";
import bannerImage3 from "../image/BANNER3.png";

const ProductosPage = () => {
  const [obtenerproductos, setObtenerproductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await ListarRequest();
        console.log("Respuesta del servidor:", response);

        if (Array.isArray(response.data)) {
          setObtenerproductos(response.data);
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
    obtenerProductos();
  }, []); // El segundo argumento [] significa que este efecto se ejecutará solo una vez cuando el componente se monte

  return (
    <div style={{ padding: "", textAlign: "center" }}>
      
     {/* Barra de Navegación */}
     <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft: "10px" , marginRight:"10px"}}>
      <Link className="navbar-brand" to="/" style={{ color: "black", fontWeight: "bold" }}>
        <img
          src={logoImage}
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: '10px' }}
        />
        Forestal Leonera
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">
              <FontAwesomeIcon icon={faCube} style={{ marginRight: '5px' }} />
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/infoforestal">
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: '5px' }} />
              Quiénes somos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
              Iniciar Sesión
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
     </nav>


      {/* Carrusel */}
      <Carousel
        interval={
          3000
        } /* Intervalo de cambio en milisegundos (3 segundos en este caso) */
      >
        {/* Primer slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImage1}
            alt="Primer slide"
          />
        </Carousel.Item>

        {/* Segundo slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImage2}
            alt="Segundo slide"
          />
        </Carousel.Item>

        {/* Tercer slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImage3}
            alt="Tercer slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5">
        <h1 className="text-center mb-4 text-secondary">
          Productos Elaborados
        </h1>
        <p className="text-center mb-4">
          Forestal Leonera se distingue por la excepcional calidad y resistencia
          de sus productos elaborados en madera. Cada pieza es cuidadosamente
          seleccionada y trabajada para ofrecer durabilidad y belleza
          incomparables. Nuestra dedicación a la excelencia garantiza que cada
          producto sea una expresión de artesanía excepcional, fusionando
          calidad y resistencia para satisfacer las más altas expectativas de
          nuestros clientes.
        </p>
        <div className="row">
          {/* Mapeo de productos */}
          {obtenerproductos.map((producto) => (
            <div key={producto._id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p
                    className="card-text text-success font-weight-bold"
                    style={{ fontSize: "1.25rem" }}
                  >
                    <strong>${producto.valorporunidad}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Texto sobre la variabilidad de precios */}
      <p className="text-center mt-5">
        Nota: Los precios de los productos pueden variar según las condiciones
        del mercado y otras variables que afecten la industria forestal.
      </p>

      {/* Pie de página */}
      <footer className="text-center position-relative">
        <img src={FooterImage} alt="Footer" className="img-fluid w-100" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <p style={{ color: "white" }}>
            &copy; 2024 My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductosPage;
