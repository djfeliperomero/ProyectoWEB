import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import logoImage from "../image/Logo.png";


function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const { signin, errors: signinErrors } = useAuth();
    const navigate = useNavigate();
    

    const onSubmit = async (data) => {
            signin(data);
            console.log(data)
            console.log('Se a iniciado sesion correctamente')
            navigate('/Tasks');

  
    };

    


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
      
      <div className="container d-flex justify-content-center align-items-center vh-100" >
            <div className="card p-4 w-75" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <h2 className="text-center mb-4">Inicio de Sesión</h2>
              {signinErrors.map((error, i) => (
                <div key={i} className="text-danger mb-3">
                  {error}
                </div>
              ))}
              <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <div className="mb-3">
                  <label className="form-label">Correo electrónico:</label>
                  <input
                    type="text"
                    className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
                    {...register("email", { required: 'El correo electrónico es requerido' })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
    
                <div className="mb-3">
                  <label className="form-label">Contraseña:</label>
                  <input
                    type="password"
                    className={`form-control ${errors && errors.password ? 'is-invalid' : ''}`}
                    {...register("password", { required: 'La contraseña es requerida' })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>
    
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </div>
              </form>
              <p>
                No tienes una cuenta aún? <Link to="/register">Regístrate</Link>
              </p>
            </div>
          </div>
      </div>
      );
    };
    
    export default LoginPage;