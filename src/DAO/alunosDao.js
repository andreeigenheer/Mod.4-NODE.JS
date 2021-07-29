const database = require("../infra/sqlite-db")

class AlunosDAO {
  constructor(database) {
    this.db = database;
  }
  visualizaUmAluno = (nome) => {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM ALUNOS WHERE NOME LIKE ?",
        nome,
        (err, rows) => {
          if (!err) {
            resolve(rows);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  visualizaTodosAlunos = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM ALUNOS", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  insereAluno = (alunos) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO ALUNOS (NOME, TURMA, EMAIL) VALUES (?, ?, ?)`,
        alunos.nome,
        alunos.turma,
        alunos.email,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(alunos);
          }
        }
      );
    });
  };

  atualizaAluno = (aluno, alunoNome) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE ALUNOS SET NOME = ?, TURMA = ?, EMAIL = ? WHERE NOME like ?",
        [aluno.nome, aluno.turma, aluno.email, alunoNome],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  removeAluno = (nome) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM ALUNOS WHERE NOME like ?", nome, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };
}

module.exports = new AlunosDAO(database);