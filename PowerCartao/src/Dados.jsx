import React, { useState } from 'react';

const Dados = () => {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        accountHolderName: '',
        accountNumber: '',
        bankName: '',
        routingNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h1>Dados do Cartão e Conta Bancária</h1>
            <form onSubmit={handleSubmit}>
                <h2>Informações do Cartão de Crédito</h2>
                <label>
                    Nome do Titular:
                    <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleChange} required />
                </label>
                <label>
                    Número do Cartão:
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </label>
                <label>
                    Data de Validade:
                    <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                </label>
                <label>
                    CVV:
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                </label>
                <h2>Informações da Conta Bancária</h2>
                <label>
                    Nome do Titular da Conta:
                    <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} required />
                </label>
                <label>
                    Número da Conta:
                    <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
                </label>
                <label>
                    Nome do Banco:
                    <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} required />
                </label>
                <label>
                    Número de Roteamento:
                    <input type="text" name="routingNumber" value={formData.routingNumber} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Dados;
