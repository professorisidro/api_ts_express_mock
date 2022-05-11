"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepoMySQL_1 = require("./mysql/RepoMySQL");
const mysqlConn = new RepoMySQL_1.RepoMySQL();
exports.default = mysqlConn;
