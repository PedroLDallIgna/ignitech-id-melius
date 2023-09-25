import mssql, { ConnectionPool } from "mssql";

interface ICliente {
  nome: string;
  cnpj: string;
  telefone: string;
  endereco: string;
}

class Clientes {
  public async getAll(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblClientes
    `;

    return pool.query(query);
  }

  public async getById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblClientes
      WHERE Id_Cliente = ${id}
    `;

    return pool.query(query);
  }

  public async insert(pool: ConnectionPool, data: ICliente) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(120), data.nome);
    request.input('CNPJ', mssql.NVarChar(18), data.cnpj);
    request.input('Telefone', mssql.NVarChar(15), data.telefone);
    request.input('Endereco', mssql.NVarChar(200), data.endereco);

    return request.execute('InserirCliente');
  }

  public async update(pool: ConnectionPool, id: number | string, data: ICliente) {
    const request = new mssql.Request(pool);
    request.input('Id_Cliente', mssql.Int, Number(id));
    request.input('Nome', mssql.NVarChar(120), data.nome);
    request.input('CNPJ', mssql.NVarChar(18), data.cnpj);
    request.input('Telefone', mssql.NVarChar(15), data.telefone);
    request.input('Endereco', mssql.NVarChar(200), data.endereco);

    return request.execute('AtualizarCliente');
  }
}

export default new Clientes();
