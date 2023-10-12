import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/delete.css';
import Nav from './Menu'; 

const EliminarIndicador = () => {
  const history = useHistory();
  const [cumplimiento, setCumplimiento] = useState(null);
  const [indicadores, setIndicadores] = useState([]);

  const handleEliminarIndicador = (indicadorId) => {
    // Realiza la eliminación de forma optimista
    const nuevosIndicadores = indicadores.filter((indicador) => indicador._id !== indicadorId);
    setIndicadores(nuevosIndicadores);

    // Realiza la solicitud DELETE al servidor
    fetch(`http://localhost:8005/api/indicadores/${indicadorId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status !== 200) {
          // Si la eliminación no fue exitosa, restaura los indicadores
          setIndicadores([...indicadores]);
          console.error('Error al eliminar el indicador con ID', indicadorId);
        }
      })
      .catch((error) => {
        // En caso de error, restaura los indicadores
        setIndicadores([...indicadores]);
        console.error('Error al eliminar el indicador con ID', indicadorId, error);
      });
  };

  const updateCumplimiento = (nuevoCumplimiento) => {
    if (!isNaN(nuevoCumplimiento) && nuevoCumplimiento >= 0 && nuevoCumplimiento <= 100) {
      setCumplimiento(nuevoCumplimiento);
    }
  };

  useEffect(() => {
    updateCumplimiento(cumplimiento);

    fetch('http://localhost:8005/api/indicadores')
      .then((response) => response.json())
      .then((data) => {
        setIndicadores(data);
        if (data[0] && !isNaN(data[0].cumplimiento)) {
          updateCumplimiento(data[0].cumplimiento);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los indicadores', error);
      });
  }, []);

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
  const circleFill = cumplimiento > 100 ? 100 : cumplimiento;

  return (
    <div className="app">
        <Nav/>
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
            <div className="columna columna10">Eliminar</div> 
          </div>
          {indicadores.map((indicador, index) => (
            <div
              key={index}
              className="rectangulo"
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
                  <div className={`circle ${circleClass}`}>
                    <div className="circle-fill" style={{ width: `${circleFill}%` }}>
                      <div className="cumplimiento-text">{cumplimiento}%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columna columna9 info10">{indicador.area}</div>
              <div className="columna columna10 info10">
                <button onClick={() => handleEliminarIndicador(indicador._id)}>X</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EliminarIndicador;
