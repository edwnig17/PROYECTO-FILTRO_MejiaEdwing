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
            usuario:'/api/usuarios',
            indicadores:'/api/indicadores',
            Feedback: '/api/feedback',
            Contact: '/api/contact',
            recuperacion: '/api/recuperacion',
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
        this.app.use(this.path.indicadores,require('../routes/indicador.routes'))
        this.app.use(this.path.Feedback,require('../routes/feedback.routes'))
        this.app.use(this.path.Contact,require('../routes/contact.routes'))
        this.app.use(this.path.recuperacion, require('../routes/recuperar.routes'));

    }
    listening(){
        this.app.listen(this.port,()=>{console.log(`Escuchando el puerto ${this.port}`)})
    }
}
module.exports= Server;