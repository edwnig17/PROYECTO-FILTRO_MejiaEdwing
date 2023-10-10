
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/Home.css'; 
import logoImg from '../img/KARIO_LOGO.png';
import profileImage from '../img/foto.png';

function LoginForm() {
  const [showLogo, setShowLogo] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [redirectToPanel, setRedirectToPanel] = useState(false);
  const foto = localStorage.getItem('foto')
  const nombre = localStorage.getItem('nombre')
  const rol = localStorage.getItem('rol')

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLogo(false);
      const timer2 = setTimeout(() => {
        setShowForm(true);
        const timer3 = setTimeout(() => {
          setShowLogo(true);
          setRedirectToPanel(true);
        }, 2000);
        return () => clearTimeout(timer3);
      }, 2000);
      return () => clearTimeout(timer2);
    }, 200);

    return () => clearTimeout(timer1);
  }, []);

  if (redirectToPanel) {
    return <Redirect to="/Panel" />;
  }

  return (
    <div className={`contenedor ${showForm ? 'form-show' : ''}`}>
      <div className="overlay"></div>
      <div className="logotipo-container">
        <div className={`logotipo ${showLogo ? 'logo-loading' : ''}`} id="logo">
          <img src={logoImg} alt="Logo" />
        </div>
      </div>
      {showForm && (
        <div className={`formulario mostrado ${showLogo ? 'logo-fade-out' : ''}`}>
          <h1>Bienvenido de nuevo</h1>
          <div className="profile-picture">
            <img src={foto} alt="Foto de perfil" className="rounded-image" />
          </div>
          <div className="user-name">
            {nombre}<p>{rol}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
