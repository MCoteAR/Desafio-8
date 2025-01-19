import React, { useState } from "react";
import { useUserContext } from "../../Context/UserContext"; // Contexto para manejar el estado del usuario

const Login = () => {
  const { login } = useUserContext(); // Usamos el método login del contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas en frontend
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Llamar al método login del contexto
    try {
      await login(email, password); // Login en el backend
      setMessage("¡Inicio de sesión exitoso!");
    } catch (error) {
      setMessage("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Login;

