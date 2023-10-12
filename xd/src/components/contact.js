import React, { useState } from 'react';
import '../styles/Contact.css';
import Nav from '../components/Menu';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('Todos los campos son obligatorios');
      return;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setErrorMessage('Correo electrónico no válido');
      return;
    }

    try {
      const response = await fetch('http://localhost:8005/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.status === 200) {
        setSuccessMessage(alert('Mensaje enviado correctamente'));
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
      } else {
        setErrorMessage('Ocurrió un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Ocurrió un error al enviar el mensaje');
    }
  };

  return (
    <div className="contact-container">
      <Nav />
      <h1 className="contact-title">Contáctanos</h1>
      <div className="contact-content">
        <div className="contact-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="contact-button" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
        <div className="contact-info">
          <p>
            Si tienes alguna pregunta o necesitas ayuda, por favor no dudes en
            contactarnos. Estamos disponibles para asistirte.
          </p>
          <div className="contact-details">
            <div>
              <strong>Teléfono:</strong>
              <p>+57 3167069665</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>CampusLands@gmail.com</p>
            </div>
            <div>
              <strong>Dirección:</strong>   
              <p>Km 4, Anillo Vial, Bucaramanga, Santander</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
