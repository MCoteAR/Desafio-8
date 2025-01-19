import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext"; // Importar el hook personalizado

const Navbar = () => {
  const { token, logout } = useUserContext(); // Accede al estado `token` y al método `logout`
  const navigate = useNavigate(); // Hook para redirección

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      logout(); // Limpia el estado y el token
      navigate("/"); // Redirige al usuario a la página de inicio
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Enlaces siempre visibles */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            {/* Si el usuario NO está autenticado */}
            {!token && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                  to="/register"
                >
                  Registro
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                to="/total"
              >
                Total
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                to="/cart"
              >
                Carrito
              </NavLink>
            </li>

            {/* Si el usuario está autenticado */}
            {token && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active" : ""}`
                    }
                    to="/profile"
                  >
                    Perfil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












/*import './Navbar.css';




const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="btn">🍕 Home</button>
        {token ? (
          <>
            <button className="btn">🔓 Profile</button>
            <button classname="btn">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn">🔐 Login</button>
            <button className="btn">🔐 Register</button>
          </>
        )}
        <button className="btn">🛒 Total: ${total.toLocaleString()}</button>
      </nav>
    );
  };
  
  export default Navbar;*/
  