import { Request, Response } from "express";
import useCaseCliente from "../useCases";
import { UseCaseCliente } from "../useCases/UseCaseCliente";

export class ClienteController{

    recuperarTodos(req: Request, res: Response){
        res.statusCode = 200;
        res.send(useCaseCliente.recuperarTodos());
    }
    recuperarPeloId(req: Request, res: Response){
        res.statusCode = 200;
        res.send("id");
    }
}