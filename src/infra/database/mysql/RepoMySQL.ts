import { Dialect, Sequelize } from "sequelize";

export class RepoMySQL {
    private dbName: string;
    private dbUser: string;
    private dbHost: string;
    private dbDialect: Dialect;
    private dbPass: string;
    private connection: any;

    public constructor() {
        this.dbName = "db_test";
        this.dbUser = "root";
        this.dbPass = "mysql";
        this.dbDialect = "mysql";
        this.dbHost = "localhost";

    }
    setup(): void {
        try {
            this.connection = new Sequelize(this.dbName, this.dbUser, this.dbPass, {
                host: this.dbHost,
                port: 3306,
                dialect: this.dbDialect
            })
            this.connection.authenticate();
            console.log("Database Connected");
        }
        catch (error) {
            console.error(error);
        }

    }
    getConnection(): any {
        if (!this.connection) {
            this.setup();
        }
        return this.connection;
    }

}