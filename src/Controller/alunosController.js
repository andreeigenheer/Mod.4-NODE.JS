///pega as informações do modelo
const Aluno = require("../Models/alunosModel");

// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)
class AlunoController {
  constructor(conecta) {
    this.conecta = conecta;
  };
  //Insira a função que exibe um aluno (método GET)
  visualizaUm = (req, res) => {
    const nome = req.params.nome;

    this.conecta
      .visualizaUmAluno(nome)
      .then((alunos) => {
        res.send(alunos);
      })
      .catch((err) => {
        throw err;
      });
  };
  //Insira a função que exibe todos alunos (método GET)
  visualizaTodos = (req, res) => {
    this.conecta
      .visualizaTodosAlunos()
      .then((alunos) => {
        res.send(alunos);
      })
      .catch((err) => {
        throw err;
      });
  };
  //Insira a função que insere um aluno (método POST)
  insere = (req, res) => {
    const { nome, turma, email } = req.body;
    const aluno = new Aluno(nome, turma, email);

    this.conecta
      .insereAluno(aluno)
      .then(() => {
        res.send({ message: "Alterado Aluno" });
      })
      .catch((err) => {
        throw err;
      });
  };

  //Insira a função que atualiza um aluno (método PUT)
  atualiza = (req, res) => {
    const nomeAluno = req.params.nome;

    const { nome, turma, email } = req.body;

    const aluno = new Aluno(nome, turma, email);

    this.conecta
      .atualizaAluno(nome, nomeAluno)
      .then(() => {
        res.send({ message: "Aluno alterado com sucesso", data: aluno });
      })
      .catch((err) => {
        throw err;
      });
  };

  //Insira a função que exclui um aluno (método GET)
  remove = (req, res) => {
    const nome = req.params.nome;

    this.conecta
      .removeAluno(nome)
      .then((resolve) => {
        if (resolve) {
          res.send({
            message: "Aluno removido do banco de dados",
            data: nome,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
}

module.exports = AlunoController;
