import React from 'react';
import '../styles/Help.css';
import Nav from '../components/Menu';

const Ayuda = () => {
  return (
    <div className="help-container">
      <Nav />
      <h1 className="help-title">Centro de Ayuda</h1>
      <div className="help-content">
        <section className="help-section">
          <h2 className="help-section-title">Preguntas Frecuentes</h2>
          <p>
            ¿Tienes alguna pregunta común? Consulta nuestras preguntas
            frecuentes para obtener respuestas rápidas.
          </p>
          < a href="/faq">Ver Preguntas Frecuentes</a>
        </section>
        <section className="help-section">
          <h2 className="help-section-title">Contacto</h2>
          <p>
            ¿Necesitas asistencia adicional? No dudes en contactarnos. Estamos
            aquí para ayudarte.
          </p>
          <a href="/contact">Contactar Soporte</a>
        </section>
      </div>
    </div>
  );
};

export default Ayuda;
