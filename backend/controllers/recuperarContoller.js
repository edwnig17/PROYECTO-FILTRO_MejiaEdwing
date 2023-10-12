const Usuario = require('../models/Usuario');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Controlador para solicitar un enlace de recuperación de contraseña
const solicitarRecuperacion = async (req, res) => {
  const { email, clientToken } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Verificar que el token del cliente coincide con el token almacenado en el Local Storage
    if (clientToken !== usuario.loginToken) {
      return res.status(401).json({ mensaje: 'Token no válido' });
    }

    // Genera un token único para el restablecimiento de contraseña
    const token = crypto.randomBytes(20).toString('hex');
    usuario.resetPasswordToken = token;
    usuario.resetPasswordExpires = Date.now() + 3600000;

    await usuario.save();

    // Configuración del transporte de correo (utilizando Gmail)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Debes configurar estas variables de entorno
        pass: process.env.EMAIL_PASSWORD // Debes configurar estas variables de entorno
      }
    });

    // URL de restablecimiento de contraseña
    const resetUrl = `http://localhost:3000/recuperar`;
    const mensaje = `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetUrl}`;

    // Enviar el correo
    await transporter.sendMail({
      to: usuario.email,
      subject: 'Solicitud de restablecimiento de contraseña',
      text: mensaje
    });

    res.status(200).json({ mensaje: 'Se ha enviado un enlace de restablecimiento a su correo electrónico' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Controlador para restablecer la contraseña
const restablecerContrasena = async (req, res) => {
  const { token, nuevaContrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!usuario) {
      return res.status(400).json({ mensaje: 'Token inválido o vencido' });
    }

    usuario.contraseña = nuevaContrasena;
    usuario.resetPasswordToken = undefined;
    usuario.resetPasswordExpires = undefined;
    await usuario.save();

    res.status(200).json({ mensaje: 'Contraseña restablecida con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  solicitarRecuperacion,
  restablecerContrasena
};
