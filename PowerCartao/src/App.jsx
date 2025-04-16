import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dados from './Dados';
import SeuPower from './SeuPower';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/seu-power" element={<SeuPower />} />
      </Routes>
    </Router>
  );
}

export default App;