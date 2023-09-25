import mssql, { ConnectionPool } from "mssql";

interface IEquipe {
  nome: string,
  descricao: string,
  area: string
}

class Equipes {
  public async getAll(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblEquipes
    `;

    return pool.query(query);
  }

  public async getById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblEquipes
      WHERE Id_Equipe = ${id}
    `;

    return pool.query(query);
  }

  public async insert(pool: ConnectionPool, data: IEquipe) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(60), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('AreaNome', mssql.NVarChar(60), data.area);

    return request.execute('InserirEquipe');
  }

  public async update(pool: ConnectionPool, id: number | string, data: IEquipe) {
    const request = new mssql.Request(pool);
    request.input('Id_Equipe', mssql.Int, Number(id));
    request.input('Nome', mssql.NVarChar(60), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('AreaNome', mssql.NVarChar(60), data.area);

    return request.execute('AtualizarEquipe');
  }

  public async delete(pool: ConnectionPool, id: number | string) {
    const request = new mssql.Request(pool);
    request.input('Id', mssql.Int, Number(id));

    return request.execute('ExcluirEquipe');
  }
}

export default new Equipes();
