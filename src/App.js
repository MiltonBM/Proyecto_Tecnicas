import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormularioMilton from './pages/Formulario_Milton';
import FormularioEmily from './pages/Formulario_Emily';
import FormularioSofia from './pages/Formulario_Sofia';
import { FirebaseProvider } from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario-milton" element={<FormularioMilton />} />
          <Route path="/formulario-emily" element={<FormularioEmily />} />
          <Route path="/formulario-sofia" element={<FormularioSofia />} />
        </Routes>
      </Router>
    </FirebaseProvider>
  );
}

export default App;