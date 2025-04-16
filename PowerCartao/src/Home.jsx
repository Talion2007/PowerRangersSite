import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file
function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dados');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <h1 style={{ marginBottom: '20px' }}>Bem-vindo ao Mundo dos Power Rangers!</h1>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '20%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
            zIndex: 1,
          }}
        ></div>
        <img
          src=
          alt="Power Rangers"
          style={{
            width: '80%',
            maxWidth: '600px',
            borderRadius: '10px',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '20%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
            zIndex: 1,
          }}
        ></div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleButtonClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ff0000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#cc0000')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff0000')}
        >
          Descubra qual Power Ranger você é!
        </button>
      </div>
    </div>
  );
}

export default Home;