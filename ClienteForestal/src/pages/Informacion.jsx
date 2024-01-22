import React from "react";
import { Navbar, Nav, Carousel } from "react-bootstrap"; // Asegúrate de tener Bootstrap y react-bootstrap instalados
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import FooterImage from "../image/FOOTER.png";
import logoImage from "../image/Logo.png";
import bannerImage1 from "../image/BANNER1.png"; // Ruta relativa a la ubicación del componente
import bannerImage2 from "../image/BANNER2.png";
import bannerImage3 from "../image/BANNER3.png";


const InformacionPage = () => {
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
      <section
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <h1>Forestal Leonera S.A</h1>
      </section>

      <section
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <h2 className="text-center mb-4 text-secondary">Nuestra Historia</h2>
        <p>
          Forestal Leonera es una empresa con más de 15 años de experiencia en
          la industria forestal. Desde nuestros inicios en 2005, nos hemos
          destacado por nuestra dedicación a la excelencia y nuestro firme
          compromiso con la sostenibilidad.
        </p>
      </section>

      <section
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <h2 className="text-center mb-4 text-secondary">
          Productos y Servicios
        </h2>
        <p>
          Como especialistas en la producción forestal, ofrecemos una amplia
          gama de productos de alta calidad, desde madera aserrada hasta
          productos de celulosa y biomasa. Nuestros productos cumplen con los
          estándares más exigentes de la industria, brindando soluciones
          confiables a nuestros clientes.
        </p>
      </section>

      <section
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <h2 className="text-center mb-4 text-secondary">Ubicación</h2>
        <p>
          Forestal Leonera tiene su sede principal en Coihueco, en la hermosa
          Región de Ñuble, Chile. Esta ubicación estratégica nos permite
          aprovechar los ricos recursos naturales de la zona, garantizando una
          gestión forestal responsable y sostenible.
        </p>
      </section>

      <section
        style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
      >
        <h2 className="text-center mb-4 text-secondary">
          Compromiso Ambiental
        </h2>
        <p>
          Nos enorgullece nuestro compromiso con el medio ambiente. En Forestal
          Leonera, implementamos prácticas forestales sostenibles y tecnologías
          ecoamigables. Además, participamos activamente en proyectos de
          reforestación en colaboración con comunidades locales y organizaciones
          medioambientales para preservar nuestro entorno.
        </p>
      </section>

      <section
        style={{ marginTop: "60px", marginLeft: "60px", marginRight: "60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <img
            src="https://www.elsoldeparral.com.mx/incoming/9pnruz-donar-7.-mariano.jpeg/ALTERNATES/LANDSCAPE_768/DONAR%207.%20mariano.jpeg"
            alt="Sede Principal"
            style={{
              width: "30%",
              borderRadius: "0 60px 0", // Redondea la esquina inferior izquierda
              overflow: "hidden",
            }}
          />
          <img
            src="https://www.tigercat.com/wp-content/uploads/2017/11/steep-slope-logging-chile.jpg"
            alt="Maquinaria Forestal"
            style={{
              width: "30%",
              borderRadius: "0 60px 0", // Esquinas rectas
              overflow: "hidden",
            }}
          />
          <img
            src="https://economiasustentable.com/wp-content/uploads/2023/08/reforestacion-1000x562.jpg"
            alt="Proyecto de Reforestación"
            style={{
              width: "30%",
              borderRadius: "0 60px 0", // Redondea la esquina superior derecha
              overflow: "hidden",
            }}
          />
        </div>
      </section>

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

export default InformacionPage;
