import mssql, { ConnectionPool } from "mssql";

interface IProjeto {
  nome: string;
  descricao: string;
  cliente: number;
  equipe: number;
  estado: number;
  dataInicio: string;
  dataEntregaPrevista: string;
  dataEntregaEfetiva?: string;
}

class Projetos {
  public async getAll(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblProjetos
    `;

    return pool.query(query);
  }

  public async getById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblProjetos
      WHERE Id_Projeto = ${id}
    `;

    return pool.query(query);
  }

  public async insert(pool: ConnectionPool, data: IProjeto) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(200), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Cliente', mssql.Int, data.cliente);
    request.input('Equipe', mssql.Int, data.equipe);
    request.input('Estado', mssql.Int, data.estado);
    request.input('DataInicio', mssql.Date, data.dataInicio);
    request.input('DataEntregaPrevista', mssql.Date, data.dataEntregaPrevista ?? null);

    return request.execute('InserirProjeto');
  }

  public async update(pool: ConnectionPool, id: number | string, data: IProjeto) {
    const request = new mssql.Request(pool);
    request.input('Id_Projeto', mssql.Int, Number(id));
    request.input('Nome', mssql.NVarChar(200), data.nome);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Cliente', mssql.Int, data.cliente);
    request.input('Equipe', mssql.Int, data.equipe);
    request.input('Estado', mssql.Int, data.estado);
    request.input('DataInicio', mssql.Date, data.dataInicio);
    request.input('DataEntregaPrevista', mssql.Date, data.dataEntregaPrevista ?? null);
    request.input('DataEntregaEfetiva', mssql.Date, data.dataEntregaEfetiva ?? null);

    return request.execute('AtualizarProjeto');
  }

  public async delete(pool: ConnectionPool, id: number | string) {
    const request = new mssql.Request(pool);
    request.input('Id', mssql.Int, Number(id));

    return request.execute('ExcluirProjeto');
  }
}

export default new Projetos();