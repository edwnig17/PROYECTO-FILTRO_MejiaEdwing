// FormularioIndicador.jsx
import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../styles/FormIndicador.css';  // Importa el archivo de estilos

function FormularioIndicador() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [cumplimiento, setcumplimiento] = useState('');
  const [fechaTerminacion, setFechaTerminacion] = useState('');
  const [formula, setFormula] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [area, setArea] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validación de formato de fecha
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(fechaInicio) || !dateRegex.test(fechaTerminacion)) {
        setError('Formato de fecha inválido');
        return;
      }
      // Realizar la solicitud POST utilizando Axios
      const response = await axios.post('http://localhost:8005/api/indicadores', {
        nombre,
        descripcion,
        categoria,
        fechaInicio,
        fechaTerminacion,
        formula,
        frecuencia,
        area,
      });

      if (response.status === 201) {
        // Restablecer los campos del formulario y borrar cualquier error
        setNombre('');
        setDescripcion('');
        setCategoria('');
        setFechaInicio('');
        setFechaTerminacion('');
        setFormula('');
        setFrecuencia('');
        setArea('');
        setError(null);
        alert('Indicador creado con éxito.');
      }
    } catch (error) {
      setError('Error al crear el indicador');
    }
  };

  return (
    <div className="background-container">
    <div className="formulario-indicador">
      <h2>Formulario de Indicador</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <div  className='FechaI'>
          <label>Fecha de Inicio:</label>
          <DatePicker
            selected={fechaInicio}
            onChange={(date) => setFechaInicio(date)}
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>
        <div>
          <label>Fecha de Terminación:</label>
          <DatePicker
            selected={fechaTerminacion}
            onChange={(date) => setFechaTerminacion(date)}
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>
        <div>
          <label>Cumplimiento</label>
          <input
            type="number"
            value={cumplimiento}
            onChange={(e) => setcumplimiento(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fórmula:</label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Frecuencia:</label>
          <input
            type="text"
            value={frecuencia}
            onChange={(e) => setFrecuencia(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Área:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Indicador</button>
      </form>
    </div>
    </div>
  );
}

export default FormularioIndicador;
