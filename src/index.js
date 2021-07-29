const express = require("express");
const routerAluno = require("./routes/aluno");
const routerProf = require("./routes/professor");


//Configura porta do servidor
const { APP_PORT } = require("./Config/appConfig");

//Cria aplicação
const app = express();

app.use(express.json())
app.use(routerAluno);
app.use(routerProf);
//Servidor rodando na porta 3000
app.listen(APP_PORT, () => {
  console.log(`Aplicação rodando na porta ${APP_PORT}`);
});
