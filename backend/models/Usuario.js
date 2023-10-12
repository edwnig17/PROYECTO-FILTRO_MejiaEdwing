const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        default: 'UsuarioRegular'
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true 
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    foto: {
        type: String,
        required: [true, 'La foto es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    },
    resetToken: String, // Token para restablecer la contraseña
    resetTokenExpiration: Date, // Fecha de vencimiento del token de restablecimiento
    nuevaContrasena: String // Campo para almacenar la nueva contraseña
});

const Usuario = model('Usuario', UsuarioSchema);

module.exports = Usuario;
