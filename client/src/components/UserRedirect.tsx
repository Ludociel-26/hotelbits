import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';

const UserRedirect = () => {
  const { userData } = useContext(AppContent)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      if (userData.role === 1) {
        navigate('/home'); // Huesped
      } else if (userData.role === 2) {
        navigate('/dashboard'); // Recepcionista
      } else {
        navigate('/'); // Ruta por defecto
      }
    }
  }, [userData, navigate]);

  return null;
};

export default UserRedirect;