import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../styles/FormIndicador.css';

function FormularioIndicador() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [cumplimiento, setCumplimiento] = useState('');
  const [fechaTerminacion, setFechaTerminacion] = useState('');
  const [formula, setFormula] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [area, setArea] = useState('');
  const [usuarios, setUsuarios] = useState([]); 
  const [selectedUserId, setSelectedUserId] = useState(''); 
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8005/api/usuarios/datosUsu')
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios', error);
      });
  }, []);
  tareas.forEach((tarea) => {
    tarea.usuario = selectedUserId; 
});
  const handleAddTarea = () => {
    setTareas([...tareas, { nombre: '', descripcion: '', fechaInicio: '', fechaVencimiento: '', usuario: selectedUserId }]);
  };

  const handleTareaChange = (index, field, value) => {
    const updatedTareas = [...tareas];
    updatedTareas[index][field] = value;
    setTareas(updatedTareas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8005/api/indicadores', {
        nombre,
        descripcion,
        categoria,
        fechaInicio,
        fechaTerminacion,
        formula,
        frecuencia,
        area,
        cumplimiento,
        tareas,
      });

      if (response.status === 201) {
        setNombre('');
        setDescripcion('');
        setCategoria('');
        setFechaInicio('');
        setFechaTerminacion('');
        setFormula('');
        setFrecuencia('');
        setArea('');
        setCumplimiento('');
        setTareas([]);
        setError(null);
        alert('Indicador creado con éxito.');
      }
    } catch (error) {
      setError('Error al crear el indicador');
    }
  }
 

  return (
    <div className="background-container">
      <div className="formulario-indicador">
      <button type="button" onClick={() => window.history.back()}>Atrás</button>
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
          <div className="FechaI">
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
            {console.log(fechaInicio,fechaTerminacion)}
            <label>Cumplimiento</label>
            <input
              type="number"
              value={cumplimiento}
              onChange={(e) => setCumplimiento(e.target.value)}
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
          <div>
            <button type="button" onClick={handleAddTarea}>Agregar Tarea</button>
          </div>
          {tareas.map((tarea, index) => (
            <div key={index}>
              <h3>Tarea {index + 1}</h3>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={tarea.nombre}
                  onChange={(e) => handleTareaChange(index, 'nombre', e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Descripción:</label>
                <input
                  type="text"
                  value={tarea.descripcion}
                  onChange={(e) => handleTareaChange(index, 'descripcion', e.target.value)}
                  required
                />
              </div>
              <div className="FechaI">
                <label>Fecha de Inicio:</label>
                <DatePicker
                  selected={tarea.fechaInicio}
                  onChange={(date) => handleTareaChange(index, 'fechaInicio', date)}
                  dateFormat="dd/MM/yyyy"
                  required
                />
              </div>
              <div>
                <label>Fecha de Vencimiento:</label>
                <DatePicker
                  selected={tarea.fechaVencimiento}
                  onChange={(date) => handleTareaChange(index, 'fechaVencimiento', date)}
                  dateFormat="dd/MM/yyyy"
                  required
                />
              </div>
              <div>
            <label>Seleccionar Usuario:</label>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              required
            >
              <option value="">Seleccionar un usuario</option>
              {usuarios.map((usuario) => (
                <option key={usuario._id} value={usuario._id}>
                  {usuario.nombre}
                </option>
              ))}
            </select>
          </div>
          
            </div>
          ))}
          <button type="submit">Crear Indicador</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioIndicador
