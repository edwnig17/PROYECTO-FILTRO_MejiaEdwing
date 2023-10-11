import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/agre.png';
import image2 from '../img/cargar.png';
import image3 from '../img/basu.png';
import image4 from '../img/KARIO_LOGO1.png'; 
import image5 from '../img/bug.png';
import image6 from '../img/ayu.png';
import image7 from '../img/confi.png';
import image8 from '../img/campa.png';

import '../styles/nav.css';

const Nav = ({ seleccionando, handleToggleSeleccion, handleBorrarSeleccionados }) => {

  const foto = localStorage.getItem('foto')
  
  return (
    <nav className="navbar">
      <div className="anclas">
        <div className='iconos' >
          <img className='iconos1' src={image1} alt="" />
          <Link to="/añadir" className="ancla">Añadir</Link>
        </div>

        <div className='iconos'>
  <img className='iconos1' src={image2} alt="" />
  <Link to="/Panel" className="ancla" onClick={() => window.location.reload()}>Refrescar</Link>
</div>

        <div className='iconos' >
          <img className='iconos1' src={image3} alt="" />
          <Link to="/delete" className="ancla">Eliminar</Link>
        </div>

        <div className='iconos' >
          <img className='logo'  src={image4} alt="" />
        </div>

        <div className='iconos'>
          <img className='iconos1' src={image5} alt="" />
          <Link to="/page4" className="ancla">Reportar</Link>
        </div>

        <div className='iconos' >
          <img className='iconos1' src={image6} alt="" />
          <Link to="/page5" className="ancla">Ayuda</Link>
        </div>

        <div className='configuracionConte' >
          <img className='confi' src={image7} alt="" />
          <img className='notificacion' src={image8} alt="" />
          <img className='Foto' src={foto} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
