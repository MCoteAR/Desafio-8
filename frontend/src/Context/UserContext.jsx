import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  // Login: llama al backend y almacena el token
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUser(data.email);
        localStorage.setItem("token", data.token); // Guardar el token en localStorage
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Logout: elimina el token
  const logout = async () => {
    try {
      // Opción de notificar al backend
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error al cerrar sesión en el servidor:", error);
    } finally {
      // Limpia el estado local y el almacenamiento
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  // Obtener perfil del usuario
  const getProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.email);
      } else {
        console.error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error durante la obtención del perfil:", error);
    }
  };

  // Cargar perfil al iniciar sesión automáticamente
  useEffect(() => {
    if (token) getProfile();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);




