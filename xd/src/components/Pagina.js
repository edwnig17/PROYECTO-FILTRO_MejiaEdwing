import React from "react";
import Hamburguesa from '../img/Hamburguesa.png';
import '../styles/pagina.css'


const pagina = () =>{
    return(
        <div className="app" >
            <div>
                <h1 className="pagina" >Panel de Indicadores</h1>
                <p className="paginas" >Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información</p>
            </div>
            <div className="tabla-container">
  <table className="tabla">
    <thead>
      <tr>
        <th colSpan={9} className="titulo-container" >
          <div className="titulo1">Indicador</div>
          <div className="titulo2">Descripcion</div>
          <div className="titulo3">Categoria</div>
          <div className="titulo4">Fecha de Inicio</div>
          <div className="titulo5">Fecha de Terminacion</div>
          <div className="titulo6">Formula</div>
          <div className="titulo7">Frecuencia</div>
          <div className="titulo8">Cumplimiento</div>
          <div className="titulo9">Area</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="rectangulo">
        <td colSpan={9}>
          <div className="informacion">
            <div className="info1" >Información 1</div>
            <div className="info2"  >Información 2</div>
            <div className="info3"  >Información 3</div>
            <div className="info4"  >Información 4</div>
            <div className="info5"  >Información 5</div>
            <div className="info6"  >Información 6</div>
            <div className="info7"  >Información 7</div>
            <div className="info8"  >Información 8</div>
            <div className="info9" >Información 9</div>
            <img className="Hamburguesa" src={Hamburguesa} ></img>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
    )
}

export default pagina;