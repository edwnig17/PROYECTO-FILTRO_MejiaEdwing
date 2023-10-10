const Role = require ('../models/Role')
const Usuario = require('../models/Usuario')

const isValidRole = async (rol='')=>{
    const existeRol = await Role.findOne({rol})
    if (!existeRol){
        throw new Error (`El rol ${rol} no esta registrado en la base de datos`)
    }

}
const isAdminRole = ( req, res, next ) => {
    if ( !req.usuario ) {
       return res.status(500).json({
           msg: 'Se quiere verificar el role sin validar el token primero'
       });
   } 
   const { rol, nombre } = req.usuario;
   
   if ( rol !== 'UsuarioAdministrador' ) {
       return res.status(401).json({
           msg: `${ nombre } no es administrador - No puede hacer esto`
       });
   }

   next();
}

const permisosRol = async (req, res, next) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { rol, nombre } = req.usuario;
    
    // Utiliza el operador lógico || para permitir 'Admin' o 'Autoridad'
    if (rol !== 'UsuarioAdministrador') {
        return res.status(401).json({
            msg: `${nombre} no es administrador ni autoridad - No puede hacer esto`
        });
    }

    next();
}
const userExistsById = async( id ) => {
    // Verificar si el id existe
    const userExists = await Usuario.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}
const emailExiste = async( email = '' ) => {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }
module.exports={isValidRole,emailExiste,permisosRol,userExistsById,isAdminRole}