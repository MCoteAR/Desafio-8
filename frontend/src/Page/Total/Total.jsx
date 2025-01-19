import React from "react";

const Total = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container mt-4 flex-grow-1">
        <h1 className="text-center">Resumen Total</h1>
        <p className="text-center">
          Aquí puedes ver un resumen del total de tus compras.
        </p>
      </main>

      <footer className="text-center bg-light py-3">
        © 2021 - Pizzería Mamma Mía - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default Total;

