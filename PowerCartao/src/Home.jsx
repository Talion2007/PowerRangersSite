import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dados');
  };

  return (
    <div className="home-container">
      <div className='gradient-overlay'></div>
      <div className='hero-content'>
      <h1 className="home-title">Bem-vindo ao Mundo dos Power Rangers!</h1>
      <div className="image-container">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>
      </div>
      <div className="button-container">
        <button
          onClick={handleButtonClick}
          className="discover-button"
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#cc0000')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff0000')}
        >
          Descubra qual Power Ranger você é!
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
