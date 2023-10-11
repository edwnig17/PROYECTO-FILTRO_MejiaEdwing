import React, { useState } from 'react';
import Nav from './Menu'; 
import Pagina from './Pagina';
import axios from 'axios'

function Panel() {
  const [seleccionando, setSeleccionando] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);
  const [mensaje, setMensaje] = useState(""); 

  const handleToggleSeleccion = () => {
    setSeleccionando(!seleccionando);
  };

  const handleBorrarSeleccionados = (seleccionados) => {
    const borrarIndicador=(id) => {
     axios.delete(`http://localhost:8005/api/indicadores${id}`).then(()=>{
      setMensaje("indicador eliminada correctamente");
     })
    }
    ;
  };

  return (
    <div>
      <Nav
        seleccionando={seleccionando}
        handleToggleSeleccion={handleToggleSeleccion}
        handleBorrarSeleccionados={() => handleBorrarSeleccionados(seleccionados)}
      />
      <Pagina
        seleccionando={seleccionando}
        handleIndicadorSeleccionado={(indicadorId) => {
          if (seleccionados.includes(indicadorId)) {
            setSeleccionados(seleccionados.filter((id) => id !== indicadorId));
          } else {
            setSeleccionados([...seleccionados, indicadorId]);
          }
        }}
      />
    </div>
  );
}

export default Panel;
