import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext"; // Importa el UserContext

const PublicRoute = ({ children }) => {
  const { token } = useUserContext(); // Accede al token desde el contexto

  // Si el usuario está autenticado, redirige a /
  if (token) {
    return <Navigate to="/" replace />;
  }

  // Si no está autenticado, renderiza el componente hijo
  return children;
};

export default PublicRoute;
