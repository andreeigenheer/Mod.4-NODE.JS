class ProfessorDAO {
  constructor(database) {
    this.db = database;
  }
  visualizaUmProf = (nome) => {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM PROFESSORES WHERE NOME LIKE ?",
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

  visualizaTodosProfs = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM PROFESSORES", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  insereProf = (professor) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO PROFESSORES (NOME, DISCIPLINA, EMAIL) VALUES (?, ?, ?)`,
        professor.nome,
        professor.disciplina,
        professor.email,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(professor);
          }
        }
      );
    });
  };

  atualizaProf = (professor, professorNome) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE PROFESSORES SET NOME = ?, DISCIPLINA = ?, EMAIL = ? WHERE NOME like ?",
        [professor.nome, professor.disciplina, professor.email, professorNome],
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

  removeProf = (nome) => {
    return new Promise((resolve, reject) => {
      this.db.run(`DELETE FROM PROFESSORES WHERE NOME like ?`, nome, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };
}
module.exports = ProfessorDAO;

/*
 removeProf = (req, res) => {
     const model = req.params.model;

     this.database = this.database.filter((professoresModel) => {
         return professoresModel.model !== model;
     });

     res.send({
         message: "professor removido do banco de dados",
         data: model,
     });
 };*/
