import { Cliente } from "../../../model/Cliente";
import cliRepo from "../../../repository/clienterepo";
import { ClienteRepo } from "../../../repository/clienterepo/ClienteRepo";


export class UseCaseCliente{

    public constructor(private clienteRepo: ClienteRepo){
        this.clienteRepo = cliRepo;
    }
    
    public async cadastrar(cliente: Cliente) {
        return null;
    }
    public async recuperarPeloId(id: number) {
        return null;
    }
    public async recuperarTodos(){ 
        return this.clienteRepo.recuperarTudao();
    }
}