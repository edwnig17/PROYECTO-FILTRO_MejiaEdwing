const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generate.jwt");

const login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ msg: 'Credenciales inválidas' });
    }

    if (!usuario.estado) {
      return res.status(401).json({ msg: 'Usuario inactivo' });
    }

    if (usuario.contraseña !== contraseña) {
      return res.status(401).json({ msg: 'Credenciales inválidas' });
    }

    if (usuario.rol === 'Usuario regular' || usuario.rol === 'Usuario administrador') {
      // El usuario tiene un rol válido, genera el token para autenticación.
      const authToken = await generateJWT(usuario.id, 'auth');
      
      // Devuelve el token en la respuesta.
      return res.json({ usuario, authToken });
    } else {
      // El usuario no tiene un rol válido, no genera el token.
      return res.status(403).json({ msg: 'No tienes permisos para generar un token' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

module.exports = login;
