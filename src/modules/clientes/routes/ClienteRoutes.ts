import { Router } from "express";
import cliController from "../controllers";

const clienteRouter: Router = Router();

clienteRouter.get("/clientes", cliController.recuperarTodos);
clienteRouter.get("/clientes/:id", cliController.recuperarPeloId);

export default clienteRouter;