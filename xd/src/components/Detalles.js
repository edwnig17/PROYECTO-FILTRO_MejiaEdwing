import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detalles = () => {
  const { id } = useParams();
  const [indicadorDetalles, setIndicadorDetalles] = useState({});
  const [usuarios, setUsuarios] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8005/api/indicadores/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIndicadorDetalles(data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del indicador', error);
      });
  }, [id]);

  useEffect(() => {
    // Verifica si hay tareas en indicadorDetalles y si indicadorDetalles.tareas es un arreglo
    if (indicadorDetalles.tareas && Array.isArray(indicadorDetalles.tareas)) {
      // Obtiene una lista de promesas para buscar nombres de usuario
      const promises = indicadorDetalles.tareas.map((tarea) => {
        return fetch(`http://localhost:8005/api/usuarios/${tarea.usuario}`)
          .then((response) => response.json())
          .then((usuario) => usuario.nombre)
          .catch((error) => {
            console.error('Error al obtener el nombre de usuario', error);
            return '';
          });
      });

      // Resuelve todas las promesas y establece los nombres de usuario en el estado cuando estén disponibles
      Promise.all(promises)
        .then((nombresUsuarios) => {
          setUsuarios(nombresUsuarios);
        });
    }
  }, [indicadorDetalles]);

  return (
    <div>
      <h1>Detalles del Indicador</h1>
      <p>Nombre: {indicadorDetalles.nombre}</p>
      <p>Descripción: {indicadorDetalles.descripcion}</p>
      <p>Categoría: {indicadorDetalles.categoria}</p>
      <p>Fecha de Inicio: {indicadorDetalles.fechaInicio}</p>
      <p>Fecha de Terminación: {indicadorDetalles.fechaTerminacion}</p>
      <p>Fórmula: {indicadorDetalles.formula}</p>
      <p>Frecuencia: {indicadorDetalles.frecuencia}</p>
      <p>Cumplimiento: {indicadorDetalles.cumplimiento}</p>
      <p>Área: {indicadorDetalles.area}</p>
      <h2>Tareas:</h2>
      <ul>
        {indicadorDetalles.tareas && indicadorDetalles.tareas.length > 0 ? (
          indicadorDetalles.tareas.map((tarea, index) => (
            <li key={index}>
              <p>Nombre de Tarea: {tarea.nombre}</p>
              <p>Descripción de Tarea: {tarea.descripcion}</p>
              <p>Fecha de Inicio: {tarea.fechaInicio}</p>
              <p>Fecha de Vencimiento: {tarea.fechaVencimiento}</p>
              <p>Usuario: {usuarios[index]}</p>
            </li>
          ))
        ) : (
          <p>No hay tareas disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default Detalles;