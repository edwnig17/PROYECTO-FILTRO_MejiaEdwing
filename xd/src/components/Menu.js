import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/agregar.png';
import image2 from '../img/relaod.png';
import image3 from '../img/trash.png';
import image4 from '../img/KARIO_LOGO1.png'; 
import image5 from '../img/bug.png';
import image6 from '../img/ayuda.png';
import image7 from '../img/settings.png';
import image8 from '../img/campanita.png';
import image9 from '../img/Pedro.jpeg';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="links">
        <div className='logos' >
          <img className='logoss' src={image1} alt="" />
          <Link to="/" className="link">Añadir</Link>
        </div>

        <div className='logos' >
          <img className='logoss' src={image2} alt="" />
          <Link to="/page2" className="link">Refrescar</Link>
        </div>

        <div className='logos' >
          <img className='logoss' src={image3} alt="" />
          <Link to="/page3" className="link">Eliminar</Link>
        </div>

        <div className='logos' >
          <img className='logo'  src={image4} alt="" />
        </div>

        <div className='logos'>
          <img className='logoss' src={image5} alt="" />
          <Link to="/page4" className="link">Reportar</Link>
        </div>

        <div className='logos' >
          <img className='logoss' src={image6} alt="" />
          <Link to="/page5" className="link">Ayuda</Link>
        </div>

        <div className='settingsContenedor' >
          <img className='settings' src={image7} alt="" />
          <img className='settingss' src={image8} alt="" />
          <img className='logoFoto' src={image9} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
