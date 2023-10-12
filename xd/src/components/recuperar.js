import React, { useState } from 'react';

export default function Recuperar() {
  const [email, setEmail] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNuevaContrasenaChange = (event) => {
    setNuevaContrasena(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realiza una solicitud al servidor para actualizar la contraseña
    try {
      const contrasenaResponse = await fetch('http://localhost:8005/api/usuarios/actualizar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nuevaContrasena }),
      });

      if (contrasenaResponse.status === 200) {
        // Contraseña actualizada con éxito, puedes redirigir al usuario o mostrar un mensaje de éxito.
        console.log('Contraseña actualizada con éxito');
      } else if (contrasenaResponse.status === 404) {
        // Usuario no encontrado, muestra un mensaje de error.
        console.error('Usuario no encontrado');
      } else {
        // Otro error al actualizar la contraseña, muestra un mensaje de error genérico.
        console.error('Error al actualizar la contraseña');
      }
    } catch (error) {
      // Manejo de errores de red u otros errores al actualizar la contraseña.
      console.error('Error al actualizar la contraseña:', error);
    }

    // Limpia los campos después de enviar
    setEmail('');
    setNuevaContrasena('');
  };

  return (
    <div>
      <h2>Establecer Nueva Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="nuevaContrasena">Nueva Contraseña:</label>
        <input
          type="password"
          id="nuevaContrasena"
          name="nuevaContrasena"
          value={nuevaContrasena}
          onChange={handleNuevaContrasenaChange}
          required
        />
        <button type="submit">Guardar Contraseña</button>
      </form>
    </div>
  );
}
