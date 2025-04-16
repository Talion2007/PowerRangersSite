import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import Powerim from './assets/Poweim.jpg'; // Ensure this is the correct path to your image

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dados');
  };

  return (
    <div className="home-container">
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url(${Powerim})`,
        }}
      >
        <div className="gradient-overlay"></div>
        <div className="hero-content">
          <h1>Bem-vindo ao Mundo dos Power Rangers!</h1>
          <button
            className="hero-button"
            onClick={handleButtonClick}
          >
            Descubra qual Power Ranger você é!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;