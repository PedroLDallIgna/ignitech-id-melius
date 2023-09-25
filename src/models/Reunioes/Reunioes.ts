import mssql, { ConnectionPool } from "mssql";

interface IReuniao {
  titulo: string;
  descricao: string;
  horario: string;
  projeto: number;
}

class Reunioes {
  public async getAll(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblReunioes
    `;

    return pool.query(query);
  }

  public async getById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblReunioes
      WHERE Id_Projeto = ${id}
    `;

    return pool.query(query);
  }

  public async insert(pool: ConnectionPool, data: IReuniao) {
    const request = new mssql.Request(pool);
    request.input('Titulo', mssql.NVarChar(120), data.titulo);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Projeto', mssql.Int, data.projeto);
    request.input('Horario', mssql.DateTime, data.horario);

    return request.execute('InserirReuniao');
  }

  public async update(pool: ConnectionPool, id: number | string, data: IReuniao) {
    const request = new mssql.Request(pool);
    request.input('Id_Reuniao', mssql.Int, Number(id));
    request.input('Titulo', mssql.NVarChar(120), data.titulo);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Projeto', mssql.Int, data.projeto);
    request.input('Horario', mssql.DateTime, data.horario);

    return request.execute('AtualizarReuniao');
  }

  public async delete(pool: ConnectionPool, id: number | string) {
    const request = new mssql.Request(pool);
    request.input('Id', mssql.Int, Number(id));

    return request.execute('ExcluirReuniao');
  }
}

export default new Reunioes();