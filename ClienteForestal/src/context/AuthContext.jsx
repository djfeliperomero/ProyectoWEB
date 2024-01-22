import { createContext, useState, useContext, useEffect } from "react";
import { RegisterRequest, loginRequest, verityTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  //usuario que sera leido en la aplicacion
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true); 
  

  const signup = async (user) => {
    try {
      const res = await RegisterRequest(user);
      console.log(res.data);
      setUser(res.data);
      setAuthenticaded(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  //auntenticar login
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setAuthenticaded(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  //contador eliminar mensajes validaciones
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000); // milisegundos
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
  
      if (!cookies.token) {
        setAuthenticaded(false);
        setLoading(false);
        return setUser(null);
      }
  
      try {
        const res = await verityTokenRequest(cookies.token)
  
        if (!res.data) {
          setAuthenticaded(false);
          setLoading(false);
          return setUser(null);
        }
  
        setAuthenticaded(true);
        setUser(res.data);
        setLoading(false);
    
      } catch (error) {
        console.log(error);
        setAuthenticaded(false);
        setUser(null);
        setLoading(false);
      }
    }
  
    checkLogin();
  }, []);

  
  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};