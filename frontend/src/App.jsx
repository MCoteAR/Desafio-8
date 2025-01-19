import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/UserContext.jsx';  // Importar el UserProvider
import Cart from './Page/Cart/Cart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './Page/Home/Home.jsx';
import Register from './Page/Register/Register.jsx';
import Login from './Page/LoginPage/LoginPage.jsx';
import Pizza from './components/Data/Pizza.jsx';
import Profile from './Page/Profile/Profile.jsx';
import NotFound from './Page/NotFound/NotFound.jsx';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
import PublicRoute from './components/Routes/PublicRoute.jsx';
import Total from './Page/Total/Total.jsx';
import {pizza} from "../../frontend/src/components/Data/PizzaData.js";
import PizzaList from './Page/PizzaList/PizzaList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <UserProvider> {/* Envolvemos toda la aplicación con el UserProvider */}
      <Router>
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Rutas públicas */}
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Ruta protegida */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Otras rutas */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas" element={<PizzaList />} /> {/* Ruta para listar las pizzas */}
          <Route path="/pizzas/:id" element={<Pizza />} /> {/* Ruta dinámica */}
          <Route path="*" element={<NotFound />} /> {/* Página 404 */}
          <Route path="/total" element={<Total />} />
         

        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;







