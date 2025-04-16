import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dados from './Dados'; // Import the Dados component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<Dados />} />
      </Routes>
    </Router>
  );
}

export default App;