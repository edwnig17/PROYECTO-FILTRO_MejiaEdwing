import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/pagina.css';
import hamburguesa from '../img/Hamburguesa.png';

const Pagina = () => {
  const history = useHistory();

  const [cumplimiento, setCumplimiento] = useState(null);
  const [indicadores, setIndicadores] = useState([]);

  const handleIndicadorClick = (indicadorId) => {
    console.log('Indicador ID:', indicadorId);
    if (indicadorId) {
      history.push(`/detalles/${indicadorId}`);
    }
  };
  const getCircleClass = (cumplimiento) => {
    if (cumplimiento <= 50) {
      return 'circle-red';
    } else if (cumplimiento <= 80) {
      return 'circle-yellow';
    } else {
      return 'circle-green';
    }
  };
  useEffect(() => {
    fetch('http://localhost:8005/api/indicadores')
      .then((response) => response.json())
      .then((data) => {
        setIndicadores(data);
        if (data[0] && !isNaN(data[0].cumplimiento)) {
          setCumplimiento(data[0].cumplimiento);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los indicadores', error);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="pagina">Panel de Indicadores</h1>
      <p className="paginas">
        Aquí puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles, da click a uno de ellos para obtener más información.
      </p>
      <div className="tabla-container">
        <div className="tabla">
          <div className="tabla-header">
            <div className="columna columna1">Indicador</div>
            <div className="columna columna2">Descripcion</div>
            <div className="columna columna3">Categoria</div>
            <div className="columna columna4">Fecha de Inicio</div>
            <div className="columna columna5">Fecha de Terminacion</div>
            <div className="columna columna6">Formula</div>
            <div className="columna columna7">Frecuencia</div>
            <div className="columna columna8">Cumplimiento</div>
            <div className="columna columna9">Área</div>
          </div>

          {indicadores.map((indicador, index) => (
            <div
              key={index}
              className="rectangulo"
              onClick={() => handleIndicadorClick(indicador._id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="columna columna1">{indicador.nombre}</div>
              <div className="columna columna2">{indicador.descripcion}</div>
              <div className="columna columna3">{indicador.categoria}</div>
              <div className="columna columna4">{indicador.fechaInicio}</div>
              <div className="columna columna5">{indicador.fechaTerminacion}</div>
              <div className="columna columna6">{indicador.formula}</div>
              <div className="columna columna7">{indicador.frecuencia}</div>
              <div className="columna columna8 info9">
                <div className="cumplimiento-circle">
                  <div className={`circle ${getCircleClass(indicador.cumplimiento)}`}>
                    <div className="circle-fill" style={{ width: `${indicador.cumplimiento}%` }}>
                      <div className="cumplimiento-text">{indicador.cumplimiento}%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columna columna9 info10">{indicador.area}</div>
              <div>
                <img src={hamburguesa} className="img-hamburguesa" alt="Hamburguesa" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina;
