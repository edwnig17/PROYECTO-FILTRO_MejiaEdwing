import React from 'react';
import '../styles/faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Preguntas Frecuentes</h1>
      <div className="faq-content">
        <div className="faq-question">
          <h2>¿Cómo creo una cuenta?</h2>
          <p>Para crear una cuenta, ve a la página de registro y completa el formulario con tu información personal. Luego, haz clic en el botón "Registrarse".</p>
        </div>

        <div className="faq-question">
          <h2>¿Cómo restablezco mi contraseña?</h2>
          <p>Si olvidaste tu contraseña, ve a la página de restablecimiento de contraseña e ingresa tu dirección de correo electrónico. Te enviaremos un enlace para restablecer tu contraseña.</p>
        </div>

        <div className="faq-question">
          <h2>¿Cómo contacto al soporte?</h2>
          <p>Puedes ponerte en contacto con nuestro equipo de soporte en cualquier momento a través de nuestro formulario de contacto o enviando un correo electrónico a support@example.com.</p>
        </div>

        <div className="faq-question">
          <h2>¿Cómo agrego un indicador?</h2>
          <p>Debes entrar con tús credenciales y darle click al icono que dice añadir , las escribes envías y listo, ya tienes tú indicador !!.</p>
        </div>

        <div className="faq-question">
          <h2>¿Cómo protegen mis datos personales?</h2>
          <p>Valoramos tu privacidad y protegemos tus datos personales de acuerdo con nuestras políticas de privacidad. No compartiremos tu información con terceros sin tu consentimiento.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
