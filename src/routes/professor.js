const router = require("express").Router();

const ProfessorController = require("../Controller/profController");
const professorController = new ProfessorController();

//Define rotas de professor
router
  .get ("/professor/:nome", professorController.visualizaUm)
  .get ("/professor", professorController.visualizaTodos)
  .post ("/professor", professorController.insere)
  .put ("/professor/:nome", professorController.atualiza)
  .delete ("/professor/:nome", professorController.remove);

module.exports = router;
