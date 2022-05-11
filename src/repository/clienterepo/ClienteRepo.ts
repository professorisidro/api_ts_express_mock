import { Cliente } from "../../model/Cliente";

export class ClienteRepo{

    recuperarTudao(){
        return Cliente.findAll();
    }
}