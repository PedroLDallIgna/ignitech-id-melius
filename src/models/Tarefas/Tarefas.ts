import mssql, { ConnectionPool } from "mssql";

interface ITarefa {
  titulo: string;
  descricao: string;
  estimativa: number;
  funcionario: number;
  projeto: number;
  estado: number;
}

class Tarefas {
  public async getAll(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblTarefas
    `;

    return pool.query(query);
  }

  public async getById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT * FROM tblTarefas
      WHERE Id_Tarefa = ${id}
    `;

    return pool.query(query);
  }

  public async insert(pool: ConnectionPool, data: ITarefa) {
    const request = new mssql.Request(pool);
    request.input('Titulo', mssql.NVarChar(120), data.titulo);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Estimativa', mssql.Int, data.estimativa);
    request.input('Projeto', mssql.Int, data.projeto);
    request.input('Estado', mssql.Int, data.estado);
    request.input('Funcionario', mssql.Int, data.funcionario ?? null);

    return request.execute('InserirTarefa');
  }

  public async update(pool: ConnectionPool, id: number | string, data: ITarefa) {
    const request = new mssql.Request(pool);
    request.input('Id_Tarefa', mssql.Int, Number(id));
    request.input('Titulo', mssql.NVarChar(120), data.titulo);
    request.input('Descricao', mssql.NVarChar(300), data.descricao);
    request.input('Estimativa', mssql.Int, data.estimativa);
    request.input('Projeto', mssql.Int, data.projeto);
    request.input('Estado', mssql.Int, data.estado);
    request.input('Funcionario', mssql.Int, data.funcionario);

    return request.execute('AtualizarTarefa');
  }

  public async delete(pool: ConnectionPool, id: number | string) {
    const request = new mssql.Request(pool);
    request.input('Id', mssql.Int, Number(id));

    return request.execute('ExcluirTarefa');
  }

  public async getWithParams(pool: ConnectionPool, params: {funcionario?: string, projeto?: string, estado?: string}) {
    let filterStringObject: {
      Id_Funcionario?: string,
      Id_Projeto?: string,
      Id_Estado?: string
    } = {};
    for (const [key, value] of Object.entries(params)) {
      let column: "Id_Funcionario" | "Id_Projeto" | "Id_Estado";
      if (key === 'funcionario') {
        column = 'Id_Funcionario';
        filterStringObject[column] = value;
      } else if (key === 'projeto') {
        column = 'Id_Projeto';
        filterStringObject[column] = value;
      } else if (key == 'estado') {
        column = 'Id_Estado';
        filterStringObject[column] = value;
      }  
    }
    let queryParamsList = [];
    for (const entry of Object.entries(filterStringObject)) {
      queryParamsList.push(entry.join(' = '));
    }
    const queryParamsString = queryParamsList.join(' AND ');
    
    const query = `
      SELECT Id_Tarefa, Tarefa, Funcionario, Projeto, Status
      FROM VW_TAREFAS
      WHERE ${queryParamsString}
    `

    return pool.query(query);
  }
}

export default new Tarefas();
