//teste de commit

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')

const app = express()

app.listen(3000, function(req, res) {
    console.log('Servidor está rodando');
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/projeto.html")
});

//Iniciando o server