import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar la página que buscas.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
