const { Schema, model } = require('mongoose');

const fechaValidator = {
  validator: function (value) {
    // Define aquí tu lógica de validación de fecha, por ejemplo:
    // Aquí asumimos que se proporcionará una fecha en formato 'DD/MM/YYYY'
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test(value);
  },
  message: 'La fecha debe estar en formato dia/mes/año (DD/MM/YYYY)',
};

const IndicadoresSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  descripcion: {
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  categoria: {
    type: String,
    required: [true, 'La Categoria es obligatoria'],
  },
  fechaInicio: {
    type: String,
    required: [true, 'La fecha de inicio es obligatoria'],
    validate: fechaValidator,
  },
  fechaTerminacion: {
    type: String,
    required: [true, 'La fecha de terminacion es obligatoria'],
    validate: fechaValidator,
  },
  formula: {
    type: String,
    required: [true, 'La formula es obligatoria'],
  },
  frecuencia: {
    type: String,
    required: [true, 'La frecuencia es obligatoria'],
  },
  area: {
    type: String,
    required: [true, 'El area es obligatoria'],
  },
  cumplimiento: {
    type: Number,
    required: [true, 'El cumplimiento es obligatoria'],
  }

});

const Indicador = model('Indicador', IndicadoresSchema);

module.exports = Indicador;
