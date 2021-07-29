const router = require("express").Router();

const professorController = require("../Controller/profController");

//Define rotas de professor

router.get ("/professor/:nome", professorController.visualizaUm)
router.get ("/professor", professorController.visualizaTodos)
router.post ("/professor", professorController.insere)
router.put ("/professor/:nome", professorController.atualiza)
router.delete ("/professor/:nome", professorController.remove);

module.exports = router;
