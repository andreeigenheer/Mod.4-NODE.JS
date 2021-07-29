const router = require("express").Router();
const database = require("../infra/sqlite-db")

const alunoController = require("../Controller/alunosController");

//Define rotas de aluno
router.get("/aluno/:nome", alunoController.visualizaUm)
router.get("/aluno", alunoController.visualizaTodos)
router.post("/aluno", alunoController.insere)
router.put("/aluno/:nome", alunoController.atualiza)
router.delete("/aluno/:nome", alunoController.remove);


module.exports = router;
