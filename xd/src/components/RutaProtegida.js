import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RutaProtegida = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const nombre = localStorage.getItem('nombre');
  const usuario = localStorage.getItem('Usuario');
//   localStorage.removeItem('foto'); // no es muy recomendable quitarlo porque borra la imagen del nav 
  const rol = localStorage.getItem('rol');

  return (
    <Route
      {...rest}
      render={(props) =>
        token && nombre && usuario && rol ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RutaProtegida;


//Voy a descansar 20 min , ya vuelvo xd
