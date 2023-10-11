import React, { useState, useEffect } from 'react';
import Hamburguesa from '../img/Hamburguesa.png';
import '../styles/pagina.css';

const Pagina = () => {
  const [cumplimiento, setCumplimiento] = useState(null);
  const [indicadores, setIndicadores] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);

  const updateCumplimiento = (nuevoCumplimiento) => {
    if (!isNaN(nuevoCumplimiento) && nuevoCumplimiento >= 0 && nuevoCumplimiento <= 100) {
      setCumplimiento(nuevoCumplimiento);
    }
  };
  const handleIndicadorSeleccionado = (indicadorId) => {
    if (seleccionados.includes(indicadorId)) {
      setSeleccionados(seleccionados.filter((id) => id !== indicadorId));
    } else {
      setSeleccionados([...seleccionados, indicadorId]);
    }
  };

  useEffect(() => {
    updateCumplimiento(cumplimiento);

    // Realiza una solicitud GET a la API para obtener los indicadores
    fetch('http://localhost:8005/api/indicadores')
      .then((response) => response.json())
      .then((data) => {
        setIndicadores(data);
        if (data[0] && !isNaN(data[0].cumplimiento)) {
          // Si existe un indicador y el cumplimiento es un número válido, actualiza el estado de cumplimiento
          updateCumplimiento(data[0].cumplimiento);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los indicadores', error);
      });
  }, []);

  // Función para determinar la clase de color del círculo según el valor de cumplimiento
  const getCircleClass = (cumplimiento) => {
    if (cumplimiento <= 50) {
      return 'circle-red';
    } else if (cumplimiento <= 80) {
      return 'circle-yellow';
    } else {
      return 'circle-green';
    }
  };

  const circleClass = getCircleClass(cumplimiento);
  const circleFill = (cumplimiento > 100) ? 100 : cumplimiento;

  return (
    <div className="app">
      
      <div>
        <h1 className="pagina">Panel de Indicadores</h1>
        <p className="paginas">Aquí puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles, dale click a uno de ellos para más información</p>
      </div>
      <div className="tabla-container">
        <table className="tabla">
        <thead>
  <tr>
    <th className="titulo-seleccion">
      <div>Seleccionar</div>
    </th>
    <th className="titulo1">Indicador</th>
    <th className="titulo2">Descripcion</th>
    <th className="titulo3">Categoria</th>
    <th className="titulo4">Fecha de Inicio</th>
    <th className="titulo5">Fecha de Terminacion</th>
    <th className="titulo6">Formula</th>
    <th className="titulo7">Frecuencia</th>
    <th className="titulo8">Cumplimiento</th>
    <th className="titulo9">Area</th>
  </tr>
</thead>
<tbody>
  {indicadores.map((indicador, index) => (
    <tr key={index} className="rectangulo">
      <td className="seleccion">
        <input
          type="checkbox"
          onChange={() => handleIndicadorSeleccionado(indicador.id)}
        />
      </td>
      <td className="">{indicador.nombre}</td>
      <td className="info2">{indicador.descripcion}</td>
      <td className="info3">{indicador.categoria}</td>
      <td className="info4">{indicador.fechaInicio}</td>
      <td className="info5">{indicador.fechaTerminacion}</td>
      <td className="info6">{indicador.formula}</td>
      <td className="">{indicador.frecuencia}</td>
      <td className="info9">
        <div className="cumplimiento-circle">
          <div className={`circle ${circleClass}`}>
            <div className="circle-fill" style={{ width: `${circleFill}%` }}>
              <div className="cumplimiento-text">{cumplimiento}%</div>
            </div>
          </div>
        </div>
        <div className="info10">{indicador.area}</div>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}

export default Pagina;
