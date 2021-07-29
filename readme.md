# 💻👩‍💻 Trabalho de conclusão de módulo 👩‍💻💻 

# 🎓📚 API - Escola 

# ⚡ Sobre o projeto

Nossa API, criada usando os conhecimentos adquiridos no módulo 4, do curso de desenvolvimento web full stack da [Resilia Educação](https://www.resilia.com.br/ "Site da Resilia"),  trabalha em cima do banco de dados de uma escola fictícia, onde podemos buscar e manipular informações sobre os professores, alunos e suas turmas. 

## 👩‍💻 Tecnologias utilizadas

- Javascript
- NodeJs

# 💻 Como executar o projeto

Versão do Node: v14.16.

- Clonar esse repositório
- Abrir no editor de texto da sua preferência (recomendamos o vscode)
- No editor: Abrir o terminal atrelado ao index. Dar o comando "npm init" para criar o módulo do node. 
- Esse trabalho requer as seguintes dependencias: 
	-   cors: versão: 2.8.5 (Comando: "npm i cors")
    	-   express: versão: 4.17.1 (Comando: "npm i express")
    	-   jest: versão: 27.0.6 (Comando: "npm i jest")
	-   nodemon -> versão: 2.0.12 (Comando: "npm i nodemon")  
	-   router: versão: 27.0.6 (Comando: "npm i router")
	-   sqlite3 -> versão: 5.0.2 (Comando: "npm i sqlite3") 

![Dependencias](https://user-images.githubusercontent.com/81193034/127494428-9e91536f-bb5d-4f60-812b-0328813ea5ca.png)


#### ⚠️ Informação importante 

Antes da execução é importante instalar a base de dados, da seguinte maneira:

- node infra/criaDB.js criar a base de dados
- Deve ser executado apenas uma vez.

![Cria base de dados](https://user-images.githubusercontent.com/81193034/127495435-96045660-4893-4091-9d25-9283e7b16e6f.PNG)


# 👨‍💻 Operando sobre a API

- Para os métodos HTTP (exceto GET), o navegador é insuficiente, por isso recomendamos o uso do POSTMAN ou do INSOMNIA para executar as operações.

![Consulta via Insomnia](https://user-images.githubusercontent.com/81193034/127494355-d808d6d7-e4aa-408c-908b-b45b037c93ee.PNG)

- A aplicação reserva para si a porta 3000, que pode ser aberta usando o endereço "http://localhost/3000". 

- As rotas reservadas pela aplicação são "professor"  e "aluno", e os parâmetros para visualização em ambos são os nomes.

- As operações reservadas para nossa API foram (GET, POST, PUT, DELETE), responsáveis pelas operações de visualização, criação, atualização e deleção respectivamente.

## 🤜🤛 Grupo:

- 👨 [André Eigenheer](https://github.com/andreeigenheer "github do André")
- 👩 [Emily Ferreira](https://github.com/EmilyFZ "github da Emily")
- 👨 [Lucas V. Ferreira](https://github.com/LucasViniciusF "github do Lucas")
- 👩 [Renata Hortense](https://github.com/renatahortense "github da Renata")
- 👨 [Ronaldo Santos](https://github.com/ronfsantos "github do Ronaldo")
