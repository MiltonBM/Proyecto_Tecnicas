import React from 'react';
import { useFirebase } from '../context/FirebaseContext';

const AdminPanel = () => {
  const { getData } = useFirebase();
  const [formsData, setFormsData] = React.useState({
    Milton: {},
    Emily: {},
    Sofia: {}
  });

  React.useEffect(() => {
    getData('formularios/Formulario_Milton', (data) => {
      setFormsData(prev => ({ ...prev, Milton: data || {} }));
    });
    getData('formularios/Formulario_Emily', (data) => {
      setFormsData(prev => ({ ...prev, Emily: data || {} }));
    });
    getData('formularios/Formulario_Sofia', (data) => {
      setFormsData(prev => ({ ...prev, Sofia: data || {} }));
    });
  }, [getData]);

  return (
    <div className="admin-panel">
      <h3>Datos de Formularios</h3>
      <div className="forms-data">
        {Object.entries(formsData).map(([name, data]) => (
          <div key={name} className="form-data">
            <h4>{name}</h4>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;