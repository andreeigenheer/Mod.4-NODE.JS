const router = require("express").Router();
const database = require("../infra/sqlite-db")

const ProfDao = require("../DAO/profDao")
const profDao = new ProfDao(database);

const ProfessorController = require("../Controller/profController");
const professorController = new ProfessorController(profDao);

//Define rotas de professor

router.get ("/professor/:nome", professorController.visualizaUm)
router.get ("/professor", professorController.visualizaTodos)
router.post ("/professor", professorController.insere)
router.put ("/professor/:nome", professorController.atualiza)
router.delete ("/professor/:nome", professorController.remove);

module.exports = router;
