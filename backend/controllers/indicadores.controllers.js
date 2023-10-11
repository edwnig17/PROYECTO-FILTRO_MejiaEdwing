const Indicador = require('../models/Indicadores');

const postIndicador = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, fechaInicio, fechaTerminacion, formula, frecuencia, area, cumplimiento } = req.body;
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(fechaInicio) || !dateRegex.test(fechaTerminacion)) {
            return res.status(400).json({ error: 'Formato de fecha inválido' });
        }
        const indicador = new Indicador({ nombre, descripcion, categoria, fechaInicio, fechaTerminacion, formula, frecuencia, area,cumplimiento });
        await indicador.save();
        res.status(201).json(indicador)
    } catch (error) {
        console.log(error);
        res.status(404).json({ error });
    }
}
const getIndicador = async(req,res)=>{
    try{
        const indicador = await Indicador.find()
        res.status(200).json(indicador);
    }
    catch{
        res.status(404).json({ msg: 'Error al obtener indicadores' });
    }
}

const deleteIndicador= async(req,res)=>{
    try {
        const { id } = req.params;
        const indicadorsBorrado = await Indicador.findByIdAndDelete(id);
        res.json(indicadorsBorrado);
      } catch (error) {
        console.error(error);
        res.status(404).json({ msg: "Error al borrar Categoria" });
      }
}
module.exports = { postIndicador,getIndicador,deleteIndicador }