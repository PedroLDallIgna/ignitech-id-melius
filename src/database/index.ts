import mssql, { ConnectionPool } from "mssql";

const config = {
    user: process.env.DB_CONNECTION_USER || 'sa',
    password: process.env.DB_CONNECTION_PASSWORD || 'myStrong(!)Password',
    database: process.env.DB_CONNECTION_DATABASE || 'master',
    server: process.env.DB_CONNECTION_SERVER || 'localhost',
    port: Number(process.env.DB_CONNECTION_PORT) || 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

class Database {
  public pool: ConnectionPool;

  constructor() {
    this.pool = new ConnectionPool(config);
    this.pool.on('error', this.connect);
  }

  public async connect() {
    try {
      await this.pool.connect();
    } catch (err) {
        setTimeout(() => {
            this.connect();
        }, 3000)
    }
  }
}

export default Database;
