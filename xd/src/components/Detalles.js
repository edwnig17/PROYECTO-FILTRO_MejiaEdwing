import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detalles = () => {
  const { id } = useParams();
  const [indicadorDetalles, setIndicadorDetalles] = useState({});

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los detalles del indicador por su ID
    fetch(`http://localhost:8005/api/indicadores/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIndicadorDetalles(data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del indicador', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalles del Indicador</h1>
      <p>Nombre: {indicadorDetalles.nombre}</p>
      <p>Descripción: {indicadorDetalles.descripcion}</p>
      {/* Agrega más detalles según tus necesidades */}
    </div>
  );
};

export default Detalles;
