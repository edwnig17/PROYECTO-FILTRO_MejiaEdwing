const Usuario = require('../models/Usuario')
const salt = require('bcryptjs').genSaltSync()
//Post usuarios new usuarios
const postUsuario = async (req,res)=>{
    try {
        const {nombre,apellido,email,contraseña,rol,estado,foto}= req.body
        const usuario = new Usuario({nombre,apellido,email,contraseña,rol,estado,foto})
        // usuario.contraseña= require('bcryptjs').hashSync(contraseña,salt)
        await usuario.save()
        res.status(201).json(usuario)
    } catch (error) {
        console.log(error);
        res.status(404).json({ error });
    }
}
//Traer todos los usuarios
const getUsuarios = async (req,res)=>{
    try {
        const usuarios= await Usuario.find({estado:true});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(404).json({ msg: 'Error al obtener usuarios' });
    }
}
//Delete usuarios
const deleteUsuarios = async (req, res)=>{
    //extrayendo id de la url de la req
    const {id} = req.params

    //borrado fisico en DB
   /*  const usuario = await Usuario.findByIdAndDelete(id); */

    // borrado virtual.  solo se cambia el estado a false del usuario asociado al id en cuestion
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json(usuario)
}
//PUT usuraios
const putUsuarios = async (req,res)=>{
    try {
        const {id}= req.params
        const{_id,estado,contraseña,...resto}=req.body
        if(contraseña){
            resto.contraseña= require('bcryptjs').hashSync(contraseña,salt)
        }
        const usuario = await Usuario.findByIdAndUpdate(id, resto, {new:true});
        res.json({
            msg:"Usuario Actualizado",
            usuario: usuario
        }) 
    } catch (error) {
        res.status(400).json({ msg: 'Error de validación: verifica los datos proporcionados.', error: error.message });
    }
}
// Ruta para obtener los IDs de usuario, nombres y roles
const getdatosUsuario= async (req, res) => {
    try {
      const usuarios = await Usuario.find({}, '_id nombre rol');
      res.json(usuarios);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  };
  // Buscar un usuario por ID
const buscarUsuarioPorId = async (req, res) => {
    try {
      const usuarioId = req.params.id; // ID del usuario proporcionado en los parámetros de la URL
  
      const usuario = await Usuario.findById(usuarioId);
  
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ mensaje: 'Error al buscar el usuario', error: error.message });
    }
  };


  const actualizarContrasena = async (req, res) => {
    const { email, nuevaContrasena } = req.body;
  
    try {
      const usuario = await Usuario.findOne({ email });
  
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      usuario.contraseña = nuevaContrasena;
      await usuario.save();
  
      res.status(200).json({ mensaje: 'Contraseña actualizada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };
  

module.exports = {
  actualizarContrasena
};

  
module.exports= {postUsuario,getUsuarios,deleteUsuarios,putUsuarios,getdatosUsuario,buscarUsuarioPorId , actualizarContrasena }