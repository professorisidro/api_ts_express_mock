"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoMySQL = void 0;
const sequelize_1 = require("sequelize");
class RepoMySQL {
    constructor() {
        this.dbName = "db_test";
        this.dbUser = "root";
        this.dbPass = "mysql";
        this.dbDialect = "mysql";
        this.dbHost = "localhost";
    }
    setup() {
        try {
            this.connection = new sequelize_1.Sequelize(this.dbName, this.dbUser, this.dbPass, {
                host: this.dbHost,
                port: 3306,
                dialect: this.dbDialect
            });
            this.connection.authenticate();
            console.log("Database Connected");
        }
        catch (error) {
            console.error(error);
        }
    }
    getConnection() {
        if (!this.connection) {
            this.setup();
        }
        return this.connection;
    }
}
exports.RepoMySQL = RepoMySQL;
