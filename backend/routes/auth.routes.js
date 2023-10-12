const express = require('express');
const router = express.Router();
const authController = require('../controllers/');

router.post('/solicitar-reset', authController.solicitarReset);
router.post('/reset-contrasena/:token', authController.resetContrasena);

module.exports = router;
