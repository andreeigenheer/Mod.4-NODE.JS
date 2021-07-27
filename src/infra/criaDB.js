/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

//==== Professores
const PROFESSORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PROFESSORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "DISCIPLINA" varchar(30),
    "EMAIL" varchar(50)
  )`;

const ADD_PROFESSORES_DATA = `
INSERT INTO PROFESSORES (ID, NOME, DISCIPLINA, EMAIL)
VALUES 
    (1, 'Maria Santos', 'Matemática', 'maria.santos@email.com'),
    (2, 'Pedro da Silva', 'Física', 'pedro.silva@email.com'),
    (3, 'Carla Lopes', 'Educação física', 'carla.lopes@email.com')
`;

function criaTabelaPrf() {
  db.run(PROFESSORES_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de professores");
  });
}

function populaTabelaPrf() {
  db.run(ADD_PROFESSORES_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de professores");
  });
}

//==== Alunos
const ALUNOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ALUNOS" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    NOME VARCHAR(64),
    TURMA VARCHAR(15),
    EMAIL VARCHAR(32)
)`;

const ADD_ALUNOS_DATA = `INSERT INTO ALUNOS (ID, NOME, TURMA, EMAIL)
VALUES 
       (1, 'Ana Carolina Dias', '1 ano A', 'ana.dias@email.com'),
       (2, 'Andre Faria', '2 ano B', 'andre.faria@email.com'),
       (3, 'Andressa Dias', '1 ano B', 'andressa.dias@email.com'),
       (4, 'Bruna Correa', '3 ano A', 'bruna.correa@email.com'),
       (5, 'Bruno Cavalcanti', '4 ano A', 'bruno.lol@email.com'),
       (6, 'Bruno de Almeida', '1 ano B', 'ana.dias@email.com')
`;

function criaTabelaAlunos() {
  db.run(ALUNOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Alunos");
  });
}

function populaTabelaAlunos() {
  db.run(ADD_ALUNOS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Alunos");
  });
}

db.serialize(() => {
  criaTabelaPrf();
  populaTabelaPrf();
  criaTabelaAlunos();
  populaTabelaAlunos();
});