"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepo = void 0;
const Cliente_1 = require("../../model/Cliente");
class ClienteRepo {
    recuperarTudao() {
        return Cliente_1.Cliente.findAll();
    }
}
exports.ClienteRepo = ClienteRepo;
