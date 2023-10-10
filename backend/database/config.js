const mongoose = require('mongoose')

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log('Conectado a la base de datos');
    } catch (error) {
        console.error(error)
        console.log('Error al conectarse a la base de datos');
    }
   
}

module.exports=dbConnection;