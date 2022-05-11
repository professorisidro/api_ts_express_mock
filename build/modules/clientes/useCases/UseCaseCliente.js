"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseCliente = void 0;
const clienterepo_1 = __importDefault(require("../../../repository/clienterepo"));
class UseCaseCliente {
    constructor(clienteRepo) {
        this.clienteRepo = clienteRepo;
        this.clienteRepo = clienterepo_1.default;
    }
    cadastrar(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    recuperarPeloId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    recuperarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clienteRepo.recuperarTudao();
        });
    }
}
exports.UseCaseCliente = UseCaseCliente;
