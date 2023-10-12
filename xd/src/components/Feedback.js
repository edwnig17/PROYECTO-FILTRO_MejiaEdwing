import React, { useState } from 'react';
import '../styles/Feddback.css';
import Nav from './Menu';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    const feedbackData = { message: feedback };

    fetch('http://localhost:8005/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Mensaje enviado: ' + feedback);
        setFeedback('');
      })
      .catch((error) => {
        console.error('Error al enviar feedback:', error);
      });
  };

  return (
    <div className="feedback-container">
      <Nav />
      <h1 className="feedback-title">Envíanos tus Quejas y Sugerencias</h1>
      <div className="feedback-content">
        <div className="feedback-form">
          <textarea
            className="feedback-input"
            rows="4"
            placeholder="Escribe tu queja o sugerencia aquí"
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
          <button className="feedback-button" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
        <div className="feedback-info">
          <p>
            Tu opinión es importante para nosotros. Si tienes alguna queja,
            sugerencia o comentario, por favor compártelo con nosotros. Estamos
            aquí para ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
