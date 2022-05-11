"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const database_1 = __importDefault(require("../infra/database"));
const sequelize = database_1.default.getConnection();
class Cliente extends sequelize_1.Model {
    constructor() {
        super(...arguments);
        this.id = 0;
        this.nome = "";
        this.cpf = "";
        this.telefone = "";
    }
}
exports.Cliente = Cliente;
Cliente.init({
    id: {
        type: sequelize_2.DataTypes.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: sequelize_2.DataTypes.STRING(100),
        field: "nome"
    },
    email: {
        type: sequelize_2.DataTypes.STRING(100),
        field: "email"
    },
    telefone: {
        type: sequelize_2.DataTypes.STRING(20),
        field: "telefone"
    }
}, {
    tableName: "tbl_cliente",
    sequelize,
    timestamps: false
});
