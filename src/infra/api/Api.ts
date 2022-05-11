import express, { Application } from 'express';
import clienteRouter from '../../modules/clientes/routes/ClienteRoutes';
const Api:Application = express();

Api.use(clienteRouter);
console.log("API usando rotas...");

export default Api;