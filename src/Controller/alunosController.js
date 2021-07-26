///pega as informações do modelo
const Alunos = require("../Models/alunosModel");


// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)
class AlunoController {
    constructor(conecta) {
            this.conecta = conecta;
        }
        //Insira a função que exibe um aluno (método GET)
    exibirUmAluno = (req, res) => {

            const aluno = req.params.nome;

            this.dbConn
                .getOneUser(nome)
                .then((aluno) => {
                    res.send(aluno);
                })
                .catch((err) => {
                    throw err;
                });
        }
        //Insira a função que exibe todos alunos (método GET)
    exibirTodosAlunos = (req, res) => {
        this.dbConn
            .visualizaTodosAlunos()
            .then((nome) => {
                res.send(nome);
            })
            .catch((err) => {
                throw err;
            });

        //Insira a função que insere um aluno (método POST)
        insereAluno = (req, res) => {
            const { nome, turma, email } = req.body
            const aluno = new Aluno(nome, turma, email)

            this.conecta
                .insereAluno(aluno)
                .then(() => {
                    res.send({ message: "Alterado Aluno" })
                })
                .catch((err) => {
                    throw (err)
                })
        }

        //Insira a função que atualiza um aluno (método PUT)
        adicionaAluno = (req, res) => {
            const adiciona = req.params.nome
            const { nome, turma, email } = req.body
            const novoAluno = new novoAluno(nome, turma, email)

            this.conecta
                .aluno(adicionaAluno, novoAluno)
                .then((err) => {
                    throw (err)
                })
                .catch(() => {
                    res.send({ message: 'Aluno adicionado' })
                })
        }

        //Insira a função que exclui um aluno (método GET)

    }

    module.exports = AlunoController;