import React from 'react';
import FormTemplate from '../components/FormTemplate';

const FormularioSofia = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Formulario Milton</h2>
        </div>
        <FormTemplate formName="Formulario_Milton" />
      </div>
    </div>
  );
};

export default FormularioSofia;