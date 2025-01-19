import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza la petición a la API
    fetch(`http://localhost:5001/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo encontrar la pizza solicitada.");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false); // Desactiva el estado de carga
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Desactiva el estado de carga incluso si hay error
      });
  }, [id]);

  // Manejo de error
  if (error) {
    return (
      <div className="alert alert-danger text-center">
        {error}. Por favor, verifica el ID de la pizza o intenta nuevamente.
      </div>
    );
  }

  // Mientras está cargando
  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  // Renderizado del detalle de la pizza
  return (
    <div className="container mt-4">
      <h1 className="text-center">{pizza.name}</h1>
      <div className="text-center">
        <img
          src={pizza.img}
          alt={pizza.name}
          className="img-fluid rounded mb-4"
          style={{ maxWidth: "400px" }}
        />
      </div>
      <p className="text-center">{pizza.description}</p>
      <p className="text-center">
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <h3 className="text-center mt-4">Ingredientes:</h3>
      <ul className="list-group list-group-flush">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item text-center">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;




