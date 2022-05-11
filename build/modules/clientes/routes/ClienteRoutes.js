"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const clienteRouter = (0, express_1.Router)();
clienteRouter.get("/clientes", controllers_1.default.recuperarTodos);
clienteRouter.get("/clientes/:id", controllers_1.default.recuperarPeloId);
exports.default = clienteRouter;
