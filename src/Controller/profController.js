//pega as informações do modelo
const Professor = require("../Models/professoresModel");
const profDao = require("../DAO/profDao")

// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)

class ProfessorController {
  constructor(conecta) {
    this.conecta = conecta;
  }
  //Função que exibe um professor (método GET)
  visualizaUm = async (req, res) => {
    const nome = req.params.nome;
    try {
      const exibeProf = await this.conecta.visualizaUmProf(nome);
      res.send(exibeProf);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que exibe todos os professores (método GET)
  visualizaTodos = async (req, res) => {
    try {
      const exibeProf = await this.conecta.visualizaTodosProfs();
      res.send(exibeProf);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que insere um professor (método POST)
  insere = async (req, res) => {
    const { nome, disciplina, email } = req.body;
    const professor = new Professor(nome, disciplina, email);

    try {
      const insereProf = await this.conecta.insereProf(professor);
      res.send(insereProf);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que atualiza um professor (método PUT)
  atualiza = async (req, res) => {
    const nomeProf = req.params.nome;
    const { nome, disciplina, email } = req.body;
    const professor = new Professor(nome, disciplina, email);

    try {
      const atualizaProfe = await this.conecta.atualizaProf(
        professor,
        nomeProf
      );
      res.send(atualizaProfe);
    } catch (err) {
      res.send(err);
    }
  };
  //Função que exclui um professor (método DELETE)
  remove = async (req, res) => {
    const nome = req.params.nome;

    try {
      const removeProfe = await this.conecta.removeProf(nome);
      res.send(removeProfe);
    } catch (err) {
      res.send(err);
    }
  };
}

module.exports = new ProfessorController(profDao);

