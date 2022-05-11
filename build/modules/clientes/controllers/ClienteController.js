"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const useCases_1 = __importDefault(require("../useCases"));
class ClienteController {
    recuperarTodos(req, res) {
        res.statusCode = 200;
        res.send(useCases_1.default.recuperarTodos());
    }
    recuperarPeloId(req, res) {
        res.statusCode = 200;
        res.send("id");
    }
}
exports.ClienteController = ClienteController;
