import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h3>Formularios Disponibles</h3>
      <div className="form-links">
        <Link to="/formulario-milton">Formulario Milton</Link>
        <Link to="/formulario-emily">Formulario Emily</Link>
        <Link to="/formulario-sofia">Formulario Sofia</Link>
      </div>
    </div>
  );
};

export default UserDashboard;