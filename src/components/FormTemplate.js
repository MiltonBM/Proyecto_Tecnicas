// components/FormTemplate.js
import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/FirebaseContext';
import { useNavigate } from 'react-router-dom';

const FormTemplate = ({ formName }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    sexo: "",
    profesion: ""
  });

  const { saveData, getData } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    getData(`formularios/${formName}`, (data) => {
      if (data) setFormData(data);
    });
  }, [formName, getData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(`formularios/${formName}`, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-input"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Edad</label>
        <input
          type="number"
          name="edad"
          className="form-input"
          value={formData.edad}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Sexo</label>
        <select
          name="sexo"
          className="form-input form-select"
          value={formData.sexo}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Profesión</label>
        <input
          type="text"
          name="profesion"
          className="form-input"
          value={formData.profesion}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-actions">
        <button 
          type="button" 
          className="btn btn-back"
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </button>
        <button type="submit" className="btn btn-primary">
          Guardar Datos
        </button>
      </div>
    </form>
  );
};

export default FormTemplate;