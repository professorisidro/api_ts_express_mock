import { Model, Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import mysqlConn from '../infra/database';

const sequelize: Sequelize = mysqlConn.getConnection();

export class Cliente extends Model {
    id: number = 0;
    nome: string = "";
    cpf: string = "";
    telefone: string = "";
}

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            field: "id",
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(100),
            field: "nome"
        },
        email: {
            type: DataTypes.STRING(100),
            field: "email"
        },
        telefone: {
            type: DataTypes.STRING(20),
            field: "telefone"
        }
    },
    {
        tableName: "tbl_cliente",
        sequelize,
        timestamps: false
    }
);
