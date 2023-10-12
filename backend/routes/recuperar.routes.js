const express = require('express');
const router = express.Router();
const recuperacionController = require('../controllers/recuperarContoller.js');

router.post('/solicitar-recuperacion', recuperacionController.solicitarRecuperacion);
router.post('/restablecer-contrasena', recuperacionController.restablecerContrasena);

module.exports = router;
