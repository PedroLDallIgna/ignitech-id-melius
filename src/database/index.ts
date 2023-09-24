import mssql from "mssql";

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

const pool = new mssql.ConnectionPool(config);

const connect = async (): Promise<void> => {
  try {
    await pool.connect();
  } catch (err) {
    setTimeout(() => {
        connect();
    }, 3000)
  }
}

connect();

pool.on("error", connect);

export const getAllFuncionarios = async (): Promise<mssql.IResult<void>> => {
  const query = `
    SELECT * FROM tblFuncionarios
  `;

  return pool.query(query);
}
