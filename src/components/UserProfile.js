import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="user-profile">
      <h3>Perfil de Usuario</h3>
      <p>Email: {currentUser?.email}</p>
      <p>Rol: {currentUser?.email === 'admin@example.com' ? 'Administrador' : 'Usuario'}</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserProfile;