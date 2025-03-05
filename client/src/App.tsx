import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Habitaciones from './pages/Habitaciones';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import Ubicacion from './pages/Ubicacion';
import Servicios from './pages/Servicios';
import { Dashboard } from './pages/dashboard/dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* 📌 Rutas públicas (cualquiera puede acceder) */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/habitaciones' element={<Habitaciones />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/ubicacion' element={<Ubicacion />} />
        <Route path='*' element={<NotFound />} />

        {/* 📌 Ruta protegida para Dashboard (Solo roles 2, 3 y 4) */}
        <Route 
          path='/dashboard'
          element={
            <ProtectedRoute allowedRoles={[2, 3, 4]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
