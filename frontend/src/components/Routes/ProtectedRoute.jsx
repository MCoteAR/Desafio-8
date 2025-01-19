import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext"; // Importa el UserContext

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext(); // Accede al token desde el contexto

  // Si el usuario no está autenticado, redirige a /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
