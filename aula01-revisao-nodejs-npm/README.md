# Diagnóstico do Servidor com Node.js

## 📌 Descrição
Este projeto utiliza o módulo nativo `os` do Node.js para obter informações sobre o sistema operacional, a memória RAM e o processador do computador.

## 🎯 Objetivo
Praticar o uso de módulos nativos do Node.js e aprender a coletar informações sobre os recursos de hardware e o sistema operacional.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **Módulo `os`** — fornece informações sobre o sistema operacional e o hardware.

## 📂 Código utilizado

```javascript
// Importando o módulo os
const os = require('os');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);
const processador = os.cpus();

console.log('=== DIAGNÓSTICO DO SERVIDOR ===\n');
console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memoria RAM total: ${memoriaTotal}`);
console.log(`Memoria RAM livre: ${memoriaLivre}`);
console.log(`Cores do processador: ${processador.length}`);
console.log(`Processador: ${processador[0].model}`);
console.log(`Velocidade do processador: ${processador[0].speed} MHz`);
```

## 📖 Explicação do código

- `require('os')`: importa o módulo nativo `os`.
- `os.platform()`: retorna a plataforma do sistema operacional, como `win32` ou `linux`.
- `os.totalmem()`: retorna a quantidade total de memória RAM em bytes.
- `os.freemem()`: retorna a quantidade de memória RAM livre em bytes.
- `(1024 ** 3)`: converte bytes para gigabytes.
- `.toFixed(2)`: limita o resultado a duas casas decimais.
- `os.cpus()`: retorna informações sobre os processadores lógicos disponíveis.
- `processador.length`: informa a quantidade de processadores lógicos.
- `processador[0].model`: exibe o modelo do processador.
- `processador[0].speed`: retorna a velocidade informada para o primeiro processador, em MHz.

## ▶️ Como executar

**1.** Instale o [Node.js](https://nodejs.org/), caso ainda não esteja instalado.

**2.** Salve o código em um arquivo chamado `diagnostico.js`.

**3.** Abra o terminal na pasta do projeto.

**4.** Execute o comando:

```bash
node diagnostico.js
```

## 💻 Exemplo de saída

```text
=== DIAGNÓSTICO DO SERVIDOR ===

Arquitetura OS: win32
Memoria RAM total: 8.00
Memoria RAM livre: 3.50
Cores do processador: 8
Processador: Modelo do processador
Velocidade do processador: 2400 MHz
```

*Observação: os valores apresentados são apenas exemplos. Os resultados reais dependem do computador utilizado.*

## 📚 Aprendizados
- Utilização de módulos
