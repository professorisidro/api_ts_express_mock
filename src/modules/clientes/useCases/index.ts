import cliRepo from "../../../repository/clienterepo";
import { UseCaseCliente } from "./UseCaseCliente";

const useCaseCliente: UseCaseCliente = new UseCaseCliente(cliRepo);

export default useCaseCliente;