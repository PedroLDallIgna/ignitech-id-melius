import mssql, { ConnectionPool } from "mssql";

interface IFuncionario {
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  endereco: string;
  email: string;
  sexo: 'F' | 'M';
  equipe: number;
}

class Funcionarios {
  public async getAllFuncionarios(pool: ConnectionPool) {
    const query = `
      SELECT * FROM tblFuncionarios
    `;

    return pool.query(query);
  }

  public async getFuncionarioById(pool: ConnectionPool, id: number | string) {
    const query = `
      SELECT *
      FROM tblFuncionarios
      WHERE Id_Funcionario = ${id}
    `;

    return pool.query(query);
  }

  public async insertFuncionario(pool: ConnectionPool, data: IFuncionario) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(50), data.nome);
    request.input('DataNascimento', mssql.Date, data.dataNascimento);
    request.input('CPF', mssql.NVarChar(13), data.cpf);
    request.input('Telefone', mssql.NVarChar(15), data.telefone);
    request.input('Endereco', mssql.NVarChar(120), data.endereco);
    request.input('Email', mssql.NVarChar(100), data.email);
    request.input('Sexo', mssql.Char, data.sexo);
    request.input('Equipe', mssql.Int, data.equipe);

    return request.execute('InserirFuncionario');
  }

  public async updateFuncionario(pool: ConnectionPool, id: number | string, data: IFuncionario) {
    const request = new mssql.Request(pool);
    request.input('Nome', mssql.NVarChar(50), data.nome);
    request.input('DataNascimento', mssql.Date, data.dataNascimento);
    request.input('CPF', mssql.NVarChar(13), data.cpf);
    request.input('Telefone', mssql.NVarChar(15), data.telefone);
    request.input('Endereco', mssql.NVarChar(120), data.endereco);
    request.input('Email', mssql.NVarChar(100), data.email);
    request.input('Sexo', mssql.Char, data.sexo);
    request.input('Equipe', mssql.Int, data.equipe);

    return request.execute('AtualizarFuncionario');
  }

  public async deleteFuncionario(pool: ConnectionPool, id: number | string) {
    const query = `
      DELETE FROM tblFuncionarios
      WHERE Id_Funcionario = ${id}
    `;

    return pool.query(query);
  }
}

export default new Funcionarios();
