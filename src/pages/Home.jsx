import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const forms = [
    {
      name: "Formulario Milton",
      path: "/formulario-milton",
      description: "Complete los datos personales para Milton"
    },
    {
      name: "Formulario Emily",
      path: "/formulario-emily",
      description: "Complete los datos personales para Emily"
    },
    {
      name: "Formulario Sofia",
      path: "/formulario-sofia",
      description: "Complete los datos personales para Sofia"
    }
  ];

  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Sistema de Formularios</h1>
        <p className="home-subtitle">
          Seleccione el formulario que desea completar. Todos los datos se guardan automáticamente en nuestra base de datos.
        </p>
      </div>
      
      <div className="form-grid">
        {forms.map((form, index) => (
          <div 
            key={form.path} 
            className="form-card"
            style={{ '--order': index }}
          >
            <div className="form-icon">📋</div>
            <Link to={form.path} className="form-link">{form.name}</Link>
            <p className="form-description">{form.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;