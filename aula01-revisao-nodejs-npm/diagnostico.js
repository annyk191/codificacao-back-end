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
