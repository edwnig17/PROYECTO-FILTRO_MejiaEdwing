const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }


    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Ocurrió un error al enviar el mensaje' });
  }
});

module.exports = router;
