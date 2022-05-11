import { UseCaseCliente } from "./UseCaseCliente";
import  cliRepo  from "../../../repository/clienterepo/__mock__";

describe("Testando casos de uso do cliente", ()=>{    
    test("exemplo de mock", async () => {
        
        let useCase: UseCaseCliente = new UseCaseCliente(cliRepo);        
        expect( await useCase.recuperarTodos()).toBeTruthy();
    })
});