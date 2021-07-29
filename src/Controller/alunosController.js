///pega as informações do modelo
const Aluno = require("../Models/alunosModel");
const alunosDao = require("../DAO/alunosDao");

// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)
class AlunoController {
  constructor(conecta) {
    this.conecta = conecta;
  }
  //Função que exibe um aluno (método GET)
  visualizaUm = async (req, res) => {
    const nome = req.params.nome;
    try {
      const exibeAluno = await this.conecta.visualizaUmAluno(nome);
      res.send(exibeAluno);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que exibe todos alunos (método GET)
  visualizaTodos = async (req, res) => {
    try {
      const exibeAlunos = await this.conecta.visualizaTodosAlunos();
      res.send(exibeAlunos);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que insere um aluno (método POST)
  insere = async (req, res) => {
    const { nome, turma, email } = req.body;
    const aluno = new Aluno(nome, turma, email);

    try {
      const insereAluno = await this.conecta.insereAluno(aluno);
      res.send(insereAluno);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que atualiza um aluno (método PUT)
  atualiza = async (req, res) => {
    const nomeAluno = req.params.nome;
    const { nome, turma, email } = req.body;
    const aluno = new Aluno(nome, turma, email);

    try {
      const atualizaAluno = await this.conecta.atualizaAluno(aluno, nomeAluno);
      res.send(atualizaAluno);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que exclui um aluno (método DELETE)
  remove = async (req, res) => {
    const nome = req.params.nome;

    try {
      const removeAlunos = await this.conecta.removeAluno(nome);
      res.send(removeAlunos);
    } catch (err) {
      res.send(err);
    }
  };
}

module.exports = new AlunoController(alunosDao);
