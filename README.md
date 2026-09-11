# Codificação Back-End

Repositório destinado aos estudos e atividades de desenvolvimento Back-End.

## Objetivos

- Aprender conceitos de desenvolvimento Back-End;
- Praticar programação com JavaScript;
- Desenvolver aplicações com Node.js;
- Criar APIs utilizando Express;
- Aprimorar a lógica de programação.

## Conteúdos

- JavaScript;
- Node.js;
- Express;
- Desenvolvimento de APIs;
- Rotas;
- Requisições HTTP;
- Manipulação de dados;
- Desenvolvimento Web.

## Tecnologias

- JavaScript
- Node.js
- Express

## Ferramentas

- Visual Studio Code
- Git
- GitHub
- NPM

## Tópicos

- Programação Back-End
- Desenvolvimento de APIs
- JavaScript no servidor
- Node.js
- Express
- Rotas e requisições HTTP

## Autor

**Anny karolinny nascimento e silva**


# Aula 01 - Revisão Node.js e NPM

## Diagnóstico do Servidor

Nesta atividade foi desenvolvido um programa em Node.js para realizar um diagnóstico básico do computador, utilizando o módulo `os`.

---

## 1. Criando o projeto

Foi criada a pasta:

```text
aula01-revisao-nodejs-npm


// importando o módulo os
const os = require ('os')

const plataforma = os.platform();
const memoriaTotal =(os.totalmem() /(1024 **3)).toFixed(2);
const memoriaLivre =(os.freemem() /(1024 **3)).toFixed(2);
const processador = os.cpus();

console.log('=== DIAGINÓSTICO DO SERVIDOR ===\n');
console.log (`Arquitetura OS: ${plataforma}`);
console.log (`Memoria RAM total : ${memoriaTotal}`);
console.log (`Memoria RAM livre : ${memoriaLivre}`);
console.log (` cores do processador : ${processador.length}`);
console.log (` processador : ${processador[0]}`);
console.log (`velocidade do processador: ${processador[0].speed} MHz`);


