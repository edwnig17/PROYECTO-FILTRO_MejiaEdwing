const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const TareaSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la tarea es obligatorio'],
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción de la tarea es obligatoria'],
  },
  fechaInicio: {
    type: Date,
    required: [true, 'La fecha de Inicio es obligatoria'],
  },
  fechaVencimiento: {
    type: Date,
    required: [true, 'La fecha de vencimiento es obligatoria'],
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia al modelo de Usuario
    required: true,
  }
});

const IndicadoresSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
  },
  fechaInicio: {
    type: Date,
    required: [true, 'La fecha de inicio es obligatoria']
  },
  fechaTerminacion: {
    type: Date,
    required: [true, 'La fecha de terminación es obligatoria']
  },
  formula: {
    type: String,
    required: [true, 'La fórmula es obligatoria'],
  },
  frecuencia: {
    type: String,
    required: [true, 'La frecuencia es obligatoria'],
  },
  area: {
    type: String,
    required: [true, 'El área es obligatoria'],
  },
  cumplimiento: {
    type: Number,
    required: [true, 'El cumplimiento es obligatorio'],
  },
  tareas: [TareaSchema], // Agrega un campo "tareas" que es un array de TareaSchema
});

const Indicador = model('Indicador', IndicadoresSchema);

module.exports = Indicador;
