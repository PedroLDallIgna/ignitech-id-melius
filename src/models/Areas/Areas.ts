import mssql, { ConnectionPool } from "mssql";

interface IArea {
  nome: string;
  descricao: string;
}

class Areas {
  public async getAllAreas(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblAreas
    `;

    return pool.query(query);
  }

  public async getAreaById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblAreas
      WHERE Id_Area = ${id}
    `;

    return pool.query(query);
  }

  public async insertArea(pool: ConnectionPool, data: IArea) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(60), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);

    return request.execute('InserirArea');
  }

  public async updateArea(pool: ConnectionPool, id: number | string, data: IArea) {
    const request = new mssql.Request(pool);
    request.input('Id_Area', mssql.Int, Number(id));
    request.input('Nome', mssql.NVarChar(60), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);

    return request.execute('AtualizarArea');
  }

  public async deleteArea(pool: ConnectionPool, id: number | string) {
    const request = new mssql.Request(pool);
    request.input('Id', mssql.Int, Number(id));

    return request.execute('ExcluirArea');
  }
}

export default new Areas();