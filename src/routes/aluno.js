const router = require("express").Router();
const database = require("../infra/sqlite-db")

const AlunoDao = require("../DAO/alunosDao")
const alunoDao = new AlunoDao(database);

const AlunoController = require("../Controller/alunosController");
const alunoController = new AlunoController(alunoDao);

//Define rotas de aluno
router.get("/aluno/:nome", alunoController.visualizaUm)
router.get("/aluno", alunoController.visualizaTodos)
router.post("/aluno", alunoController.insere)
router.put("/aluno/:nome", alunoController.atualiza)
router.delete("/aluno/:nome", alunoController.remove);


module.exports = router;
