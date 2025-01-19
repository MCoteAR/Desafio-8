import React from 'react';
import { useUserContext } from '../../Context/UserContext';


const Profile = () => {
 
    const [email, setEmail] = useUserContext('usuario@ejemplo.com'); 
  
  
    const handleLogout = () => {
      alert("Sesión cerrada");
      setEmail(''); 
    };


  return (
    <div className="container mt-4 text-center">
      <h1>Perfil</h1>
      {email ? (
        <div>
          <p>Email: <strong>{email}</strong></p>
          <button className="btn btn-danger mt-2" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Sesión cerrada. Por favor, vuelve a iniciar sesión.</p>
      )}
    </div>
  );
};

export default Profile;
