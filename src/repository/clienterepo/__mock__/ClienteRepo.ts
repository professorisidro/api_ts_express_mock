import { Cliente } from "../../../model/Cliente";

export class ClienteRepo{
    private lista: Cliente[] = new Array<Cliente>();
    
    async recuperarTudao(){
        return this.lista;
    }
}