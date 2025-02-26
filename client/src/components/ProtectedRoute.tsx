import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';

interface ProtectedRouteProps {
  allowedRoles: number[];
  children: JSX.Element;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { isLoggedin, userData } = useContext(AppContent)!;

  // Si el usuario no está autenticado, redirigir a login
  if (!isLoggedin || !userData) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario no tiene permisos, redirigir a home con un mensaje de error
  if (!allowedRoles.includes(userData.role)) {
    return <Navigate to="/home" replace state={{ noAccess: true }} />;
  }

  return children;
};

export default ProtectedRoute;
