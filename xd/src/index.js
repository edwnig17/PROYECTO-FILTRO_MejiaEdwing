import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter

import App from './App'; // Ajusta la ruta según tu estructura de archivos

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
