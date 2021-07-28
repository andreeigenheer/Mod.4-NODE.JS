const professor = require("./professor");
const aluno = require("./aluno");

const express = require('express');

module.exports = app =>{app.use(
    express.json(),
    professor,
    aluno
)};
