//pega as informações do modelo
const Professor = require("../Models/professoresModel");

// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)

class ProfessorController {
  constructor(conecta) {
    this.conecta = conecta;
  }
  //Insira a função que exibe um professor (método GET)
  visualizaUm = (req, res) => {
    const nome = req.params.nome;

    this.conecta
      .visualizaUmProf(nome)
      .then((professor) => {
        res.send(professor);
      })
      .catch((err) => {
        throw err;
      });
  };
  //Insira a função que exibe todos os professores (método GET)
  visualizaTodos = (req, res) => {
    this.conecta
      .visualizaTodosProfs()
      .then((nome) => {
        res.send(nome);
      })
      .catch((err) => {
        throw err;
      });
  };
  //Insira a função que insere um professor (método POST)
  insere = (req, res) => {
    const {nome,disciplina,email} = req.body;
    const professor = new Professor(nome,disciplina,email);
    this.conecta
      .insereProf(professor)
      .then((resolve) => {
        res.send({
          message: "Professor Salvo no banco",
          data: resolve,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  //Insira a função que atualiza um professor (método PUT)
  atualiza = (req, res) => {
    const nomeProf = req.params.nome;
    const { nome, disciplina, email } = req.body;
    const professor = new Professor(nome, disciplina, email);

    this.conecta
      .atualizaProf(professor, nomeProf)
      .then((err) => {
        throw err;
      })
      .catch(() => {
        res.send({ message: "Professor atualizado" });
        console.log(professor)
      });
  };

  //Insira a função que exclui um professor (método DELETE)

  remove = (req, res) => {
    const nome = req.params.nome;

    this.conecta
      .removeProf(nome)
      .then((resolve) => {
        if (resolve) {
          res.send({
            message: "Usuário removido do banco de dados",
            data: nome,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
}
module.exports = ProfessorController;
