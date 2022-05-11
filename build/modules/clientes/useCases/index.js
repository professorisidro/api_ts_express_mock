"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clienterepo_1 = __importDefault(require("../../../repository/clienterepo"));
const UseCaseCliente_1 = require("./UseCaseCliente");
const useCaseCliente = new UseCaseCliente_1.UseCaseCliente(clienterepo_1.default);
exports.default = useCaseCliente;
