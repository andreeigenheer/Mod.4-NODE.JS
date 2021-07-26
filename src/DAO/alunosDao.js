class AlunosDAO {
    constructor(database) {
        this.db = database;
    }

    visualizaUmAluno = () => {};

    visualizaTodosAluno = () => {};

    insereAluno = () => {};

    atualizaAluno = () => {};

    removeAluno = () => app.delete("/alunoModels/:id", (req, res) => {
        const alunoModels = alunoModels.deleteOne({ _id: req.params.id }, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Error: Aluno não foi apagado!"
            });

            return res.json({
                error: false,
                message: "Professor adicionado com sucesso!"
            });
        });
    });

}

removeAluno = (req, res) => {
    const model = req.params.model;

    this.database = this.database.filter((professoresModel) => {
        return professoresModel.model !== model;
    });

    res.send({
        message: "professor removido do banco de dados",
        data: model,
    });
};