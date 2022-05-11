"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClienteRoutes_1 = __importDefault(require("../../modules/clientes/routes/ClienteRoutes"));
const Api = (0, express_1.default)();
Api.use(ClienteRoutes_1.default);
console.log("API usando rotas...");
exports.default = Api;
