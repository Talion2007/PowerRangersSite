import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dados.css'; // Import the CSS file

const Dados = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    routingNumber: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/seu-power'); // Redirect to the "Seu Power" page
  };

  return (
    <div className="dados-container">
      <div className="gradient-overlay"></div>
      <div className="dados-content">
        <h1>Dados do Cartão e Conta Bancária</h1>
        <form onSubmit={handleSubmit}>
          <h2>Informações do Cartão de Crédito</h2>
          <label>
            Nome do Titular:
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Número do Cartão:
            <input
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Data de Validade:
            <input
              type="date"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </label>
          <h2>Informações da Conta Bancária</h2>
          <label>
            Nome do Titular da Conta:
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Número da Conta:
            <input
              type="number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Nome do Banco:
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Número de Roteamento:
            <input
              type="number"
              name="routingNumber"
              value={formData.routingNumber}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Dados;