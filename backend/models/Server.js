const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares()
        this.connectionDb()
        this.path={
            role:'/api/roles',
            login:'/api/login',
            usuario:'/api/usuarios'
         }
        this.routes()
    }
    async connectionDb (){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.path.role,require('../routes/role.routes'));
        this.app.use(this.path.usuario,require('../routes/usuarios.routes'));
        this.app.use(this.path.login,require('../routes/login.routes'));
        
    }
    listening(){
        this.app.listen(this.port,()=>{console.log(`Escuchando el puerto ${this.port}`)})
    }
}
module.exports= Server;