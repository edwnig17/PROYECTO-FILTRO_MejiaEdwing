const {Schema, model} = require('mongoose');
const {isDate} = require('mongoose-validator');

const fechaValidator=[
    isDate({format: 'DD/MM/YYYY'}),
    'La fecha debe estar en formato dia/mes/año (DD/MM/YYYY)'
]

const IndicadoresSchema= Schema({
    indicador:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    categoria:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    fechaInicio:{
        type:String,
        required: [true, 'El nombre es obligatorio'],
        validate:fechaValidator
    },
    fechaTerminacion:{
        type:String,
        required: [true, 'El nombre es obligatorio'],
        validate:fechaValidator
    },
    formula:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    frecuencia:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    area:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    }
})

const Indicadores = model('Role',IndicadoresSchema);

module.exports = Indicadores;