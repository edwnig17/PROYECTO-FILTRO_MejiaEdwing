const Indicador = require('../models/Indicadores');
const postIndicador = async (req, res) => {
  try {
      const { nombre, descripcion, categoria, fechaInicio, fechaTerminacion, formula, frecuencia, area, cumplimiento, tareas } = req.body;
      
      const indicador = new Indicador({
          nombre,
          descripcion,
          categoria,
          fechaInicio,
          fechaTerminacion,
          formula,
          frecuencia,
          area,
          cumplimiento,
          tareas
      });

      // Guarda el indicador en la base de datos
      await indicador.save();

      res.status(201).json(indicador);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el indicador' });
  }
};
const getIndicador = async(req,res)=>{
    try{
        const indicador = await Indicador.find()
        res.status(200).json(indicador);
    }
    catch{
        res.status(404).json({ msg: 'Error al obtener indicadores' });
    }
}
const getindicadorId= async (req, res) => {
    try {
      const indicador = await Indicador.findById(req.params.id);
  
      if (!indicador) {
        return res.status(404).json({ error: 'Indicador no encontrado' });
      }
  
      res.json(indicador);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el indicador' });
    }
  };
  
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
module.exports = { postIndicador,getIndicador,deleteIndicador,getindicadorId }