const Server = require('../backend/models/Server');
const dotenv = require('dotenv')

dotenv.config()
const server = new Server();

server.listening();
