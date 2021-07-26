class ProfessorDAO {
    constructor(database) {
        this.db = database;
    }

    visualizaUmProf = () => {

    };

    visualizaTodosProfs = () => {

    };

    insereProf = (professor) => {
        return new Promise((resolve, reject) => {
            this.db.run(
                `INSERT INTO PROFESSORES (NOME, DISCIPLINA, EMAIL) VALUES(?,?,?)`,
                professor.nome,
                professor.disciplina,
                professor.email,
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(professor)
                    }
                }
            )
        })
    };

    atualizaProf = () => {

    }



}
//Filtro para requisição Professor (delete)
//
// removeProf = (req, res) => {
//     const model = req.params.model;

//     this.database = this.database.filter((professoresModel) => {
//         return professoresModel.model !== model;
//     });

//     res.send({
//         message: "professor removido do banco de dados",
//         data: model,
//     });
// };

removeProf = () => {
    app.delete("/professoresModel/:nome", (req, res) => {
        const professoresModeljs = professoresModel.js.deleteOne({ _id: req.params.nome }, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Error: professor não foi apagado com sucesso!"
            });

            return res.json({
                error: false,
                message: "professor apagado com sucesso!"
            });
        });
    });

}