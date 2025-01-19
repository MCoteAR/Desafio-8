import React from "react";
import { Link } from "react-router-dom";
import { pizza } from "../../components/Data/PizzaData"; 

const PizzaList = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Pizzas</h1>
      <div className="row">
        {pizza.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.img} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.desc}</p>
                <p>
                  <strong>Precio:</strong> ${item.price}
                </p>
                <Link to={`/pizzas/${item.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
