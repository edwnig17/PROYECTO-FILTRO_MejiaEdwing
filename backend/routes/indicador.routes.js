const { postIndicador,getIndicador,deleteIndicador,getindicadorId } = require('../controllers/indicadores.controllers');
const routerIndicador = require('express').Router();
const { check } = require('express-validator');

routerIndicador.post(
  '/',
  [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('categoria', 'La categoria del proyecto es obligatoria').not().isEmpty(),
    check('formula', 'La formula del proyecto es obligatoria').not().isEmpty(),
    check('area', 'El area del proyecto es obligatoria').not().isEmpty(),
  ],
  postIndicador
);

routerIndicador.get('/',getIndicador);
//GET INDICADOR POR ID 
routerIndicador.get('/:id',getindicadorId)
routerIndicador.delete('/:id',deleteIndicador)

module.exports = routerIndicador;