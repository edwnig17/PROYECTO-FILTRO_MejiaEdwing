const { postUsuario, getUsuarios,deleteUsuarios,putUsuarios,getdatosUsuario,buscarUsuarioPorId, actualizarContrasena} = require('../controllers/usuario.controllers');
const {validateDocuments} = require('../middlewares/validate.documents');
const {check} = require('express-validator');
const {isValidRole,emailExiste,isAdminRole}= require('../helpers/db.validators.usuarios');
const routesUsuarios = require('express').Router();

//GET Usuarios activos
routesUsuarios.get('/',getUsuarios)//GET//http://localhost:8005/api/usuarios 

//GET DATOS USUARIOSiooiooioo2023-10-07t05:00:00.000Z2023-10-05T05:00:00.000Zioio2%10
routesUsuarios.get('/datosUsu',getdatosUsuario)

//GET usuarios por id
routesUsuarios.get('/:id',buscarUsuarioPorId)

//POST usuarios
routesUsuarios.post('/',[check('nombre','El nombre no es valido').not().isEmpty(),check('apellido','El apellido no es valido').not().isEmpty(),check('contraseña','La contraseña debe contener minimo 6 caracteres').isLength({min:6}),check('email','El correo no es valido').isEmail(),check('correoElectronico').custom(emailExiste),check('rol').custom(isValidRole),validateDocuments],postUsuario) //POST// http://localhost:8005/api/usuarios

//DELETE USUARIOS
routesUsuarios.delete('/:id',[check('id','No es un ID valido').isMongoId(),check('id'),isAdminRole,validateDocuments],deleteUsuarios) //DELETE// http://localhost:8005/api/usuarios/ID

//PUT USUARIOS
routesUsuarios.put('/:id',[check('id', 'No es un ObjectID MongoDB válido').isMongoId(), check('rol').custom(isValidRole),isAdminRole,validateDocuments],putUsuarios)//PUT // lhttp://localhost:8005/api/usuarios/ID


routesUsuarios.post('/actualizar-contrasena', actualizarContrasena);


module.exports= routesUsuarios