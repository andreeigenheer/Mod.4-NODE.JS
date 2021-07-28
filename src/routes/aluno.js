const router = require("express").Router();

const AlunoController = require("../Controller/alunosController");
const alunoController = new AlunoController();

//Define rotas de aluno
router
  .get("/aluno/:nome", alunoController.visualizaUm)
  .get("/aluno", alunoController.visualizaTodos)
  .post("/aluno", alunoController.insere)
  .put("/aluno/:nome", alunoController.atualiza)
  .delete("/aluno/:nome", alunoController.remove);

module.exports = router;
