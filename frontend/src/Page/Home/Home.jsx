import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importa Link
import { pizza } from "../../components/Data/PizzaData"; 

import "../../Page/Home/Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        return response.json();
      })
      .then((data) => setPizzas(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="overlay text-center text-white p-4 rounded">
        <h1 className="display-3 font-weight-bold">
          Bienvenido a Pizzería Mamma Mía
        </h1>
        <p className="lead">Las mejores pizzas, ¡recién horneadas para ti!</p>
        {/* Cambiar de <a> a <Link> */}
        <Link to="/pizzas" className="btn btn-lg btn-primary">
          Ver Pizzas
        </Link>
      </div>
    </div>
  );
};

export default Home;








/*const Home = () => {
  return (
    
    <div className="container">
      <Header />
     
      <div className="row mt-4">
        

      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
         </div>

<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
         </div>


<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        />
        </div>
      </div>
    </div>
  );
};*/


