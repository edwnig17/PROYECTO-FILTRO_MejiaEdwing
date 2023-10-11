import React from 'react';

const DeleteItem = ({ item, onDelete, isSelected, onSelect }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
      />
      <p>Nombre: {item.nombre}</p>
      <p>Descripción: {item.descripcion}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteItem;
