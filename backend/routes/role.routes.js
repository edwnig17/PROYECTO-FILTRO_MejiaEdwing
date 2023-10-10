const routesRole = require('express').Router()
const {postRole,getRoles} = require('../controllers/rol.controllers')


routesRole.post('/',postRole)//POST// http://localhost:8005/api/roles
routesRole.get('/',getRoles)//GET// http://localhost:8005/api/roles
module.exports= routesRole;