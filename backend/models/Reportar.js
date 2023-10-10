const {Schema, model} = require('mongoose');

const ReporteSchema= Schema({
    titulo:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    }
})

const Reporte = model('Role',ReporteSchema);

module.exports = Reporte;