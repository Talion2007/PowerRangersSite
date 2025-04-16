import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Home from './Home';
import Dados from './Dados';
import SeuPower from './SeuPower';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/seu-power" element={<SeuPower />} />
      </Routes>
    </Router>
    <Analytics />
    <SpeedInsights />
    </>
  );
}

export default App;