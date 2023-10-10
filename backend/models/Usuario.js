const {Schema, model} = require('mongoose');

const UsuarioSchema= Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    rol:{
        type:String,
        required: [true, 'El nombre es obligatorio'],
        default: 'UsuarioRegular'
    },
    email:{
        type:String,
        required:[true, 'El email es obligatorio']
    },
    contraseña:{
        type:String,
        required:[true, 'La contraseña es obligatoria']
    },
    foto:{
        type:String,
        equired:[true,'La foto es obligatoria']
    },
    estado :{
        type:Boolean,
        default: true
    }
})

const Usuario = model('Usuario',UsuarioSchema);

module.exports = Usuario;