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
import proyecto1Image from "../image/PROYECTOS1.jpeg";
import proyecto2Image from "../image/PROYECTOS2.jpeg";
import proyecto3Image from "../image/PROYECTOS3.jpeg";


function HomePage() {
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
        <header className="text-center">
          <h1>Bienvenidos a Forestal Leonera</h1>
          <p className="lead">
            Forestal Leonera es líder en el sector forestal, comprometida con la
            gestión sostenible de bosques y la fabricación de productos
            madereros de alta calidad. Desde la plantación hasta la elaboración,
            nos dedicamos a proporcionar soluciones respetuosas con el medio
            ambiente y duraderas. Nuestra pasión es fusionar la tradición
            forestal con la innovación para ofrecer productos excepcionales y
            contribuir al equilibrio ecológico.
          </p>
        </header>

        <section className="my-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={proyecto1Image}
                alt="Proyecto 1"
                className="img-fluid "
                style={{
                  borderRadius: "0 60px 0",
                }}
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="mt-0">Forestal TechHogar</h3>
              <p>
                Forestal Leonera se embarcará en el proyecto "Forestal
                TechHogar", una iniciativa que revoluciona el sector de las
                casas prefabricadas. Este proyecto fusiona la experiencia en la
                gestión sostenible de bosques con la vanguardia tecnológica en
                construcción de viviendas. Las casas prefabricadas no solo
                destacarán por sus materiales provenientes de bosques
                gestionados de manera responsable, sino que también incorporarán
                soluciones tecnológicas inteligentes para la gestión eficiente
                de energía, seguridad avanzada y sistemas domóticos. Forestal
                TechHogar ofrecerá hogares que no solo respetan el medio
                ambiente, sino que también integran la última tecnología para
                mejorar la calidad de vida de sus habitantes.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={proyecto2Image}
                alt="Proyecto 2"
                className="img-fluid "
                style={{
                  borderRadius: "0 60px 0",
                }}
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="mt-0">Muebles Sostenibles</h3>
              <p>
                Forestal Leonera se complace en presentar su nueva línea de
                muebles sostenibles. Comprometidos con la preservación del medio
                ambiente, estos muebles son fabricados exclusivamente con
                materiales provenientes de bosques certificados como fuentes
                sostenibles. Cada compra de muebles contribuirá a proyectos de
                reforestación y conservación ambiental, asegurando que la
                empresa siga avanzando en prácticas responsables con el entorno.
                Los clientes podrán disfrutar de diseños exclusivos y de
                calidad, sabiendo que están invirtiendo en muebles que respetan
                y cuidan el medio ambiente. Este proyecto refleja el firme
                compromiso de Forestal Leonera con la sostenibilidad y la
                responsabilidad ambiental.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={proyecto3Image}
                alt="Proyecto 3"
                className="img-fluid"
                style={{
                  borderRadius: "0 60px 0",
                }}
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="mt-0">Reforestación Sostenible</h3>
              <p>
                Forestal Leonera lidera el proyecto de reforestación sostenible
                con el objetivo de restaurar áreas degradadas y contribuir a la
                biodiversidad local. Nos comprometemos a plantar árboles nativos
                en colaboración con comunidades locales y organizaciones
                ambientales. Esta iniciativa busca no solo contrarrestar la
                deforestación, sino también mejorar la calidad del suelo y
                promover la conservación de especies autóctonas. A medida que
                avanzamos en este proyecto, trabajamos de la mano con la
                comunidad para crear conciencia sobre la importancia de la
                reforestación y el impacto positivo que tiene en el entorno.
              </p>
            </div>
          </div>
        </section>
      </div>

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
}
export default HomePage;
