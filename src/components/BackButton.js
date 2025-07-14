import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/')} className="back-button">
      Volver al Inicio
    </button>
  );
};

export default BackButton;