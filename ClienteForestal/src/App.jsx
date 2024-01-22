import { BrowserRouter, Routes,Route}   from 'react-router-dom';

//rutas paginas
import HomePage from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TareaPage from './pages/Tasks';
import ProductosPage from "./pages/ProductosPage";
import InformacionPage from './pages/Informacion';


//Contexto para llamar a usuario
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './ProtectedRoute';


function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/login' element={<LoginPage />} />
           <Route path='/register' element={<RegisterPage />} />
           <Route path='/productos' element={<ProductosPage />} />
           <Route path='/infoforestal' element={<InformacionPage />} />

          <Route element={<ProtectedRoute/>}>
           <Route path='/Tasks' element={<TareaPage />} />

           </Route>
         </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
