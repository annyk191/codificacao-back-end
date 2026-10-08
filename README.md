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


 
# Aula 02 - Módulos CommonJS e ESM



## Sistema de Registro de Logs
Nesta atividade foi desenvolvido um sistema simples de registro de logs utilizando **Node.js e módulos ESM (ECMAScript Modules)**.
O programa cria uma pasta chamada `logs`, cria ou utiliza o arquivo `sislog.log` e registra mensagens informando acontecimentos do sistema, como a inicialização do servidor e a conexão com o banco de dados.
--
## 1. Importação dos módulos
```javascript
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatlog } from './utilitario.js';
```
Foram importados alguns módulos para realizar diferentes funções.
O módulo `fs/promises` permite trabalhar com arquivos e pastas utilizando operações assíncronas.
O módulo `path` é utilizado para trabalhar com caminhos de arquivos e diretórios.
O `fileURLToPath` transforma a URL do arquivo atual em um caminho que pode ser utilizado pelo sistema operacional.
Por fim, a função `formatlog` é importada do arquivo `utilitario.js`. Essa função é responsável por organizar a mensagem do log com data e hora.
---
## 2. Obtendo o caminho do arquivo
```javascript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
Como o projeto utiliza módulos ESM, as variáveis `__filename` e `__dirname` não estão disponíveis automaticamente.
Por isso, `fileURLToPath(import.meta.url)` é utilizado para descobrir o caminho do arquivo atual.
Depois, `path.dirname()` é utilizado para descobrir o diretório onde o arquivo está localizado.
---
## 3. Função para salvar os logs
```javascript
async function salvarlogsistema(mensagemlog) {
```
A função `salvarlogsistema()` recebe uma mensagem que será registrada no arquivo de log.
Ela foi criada como `async` porque utiliza operações assíncronas do módulo `fs/promises`.
---
## 4. Definindo a pasta e o arquivo de log
```javascript
const pastalog = path.join(__dirname, 'logs');
const arquivolog = path.join(pastalog, 'sislog.log');
```
O `path.join()` é utilizado para montar os caminhos corretamente.
A variável `pastalog` representa a pasta `logs`.
A variável `arquivolog` representa o arquivo `sislog.log`, que ficará dentro da pasta `logs`.
A estrutura ficará assim:
```text
aula02-modulos-commonjs-esm/
│
├── index.js
├── utilitario.js
│
└── logs/
    └── sislog.log
```
---
## 5. Criando a pasta
```javascript
await fs.mkdir(pastalog, { recursive: true });
```
Esse comando cria a pasta `logs`.
A opção `recursive: true` permite que a pasta seja criada mesmo que os diretórios necessários ainda não existam.
Se a pasta já existir, o programa não apresenta erro por causa disso.
---
## 6. Formatando o log
```javascript
const registro = formatlog(mensagemlog);
```
Aqui é chamada a função `formatlog()`, que foi criada no arquivo `utilitario.js`.
Ela recebe a mensagem e acrescenta a data e a hora antes de salvar o registro.
---
## 7. Salvando o registro
```javascript
await fs.appendFile(arquivolog, registro, 'utf-8');
```
O `appendFile()` adiciona o novo registro ao final do arquivo `sislog.log`.
Isso significa que os registros anteriores não são apagados.
O `'utf-8'` define a codificação utilizada para salvar o texto.
---
## 8. Tratamento de erros
```javascript
} catch (erro) {
    console.error('erro ao registrar log ', erro);
}
```
O `try...catch` é utilizado para tratar possíveis erros durante a criação da pasta ou gravação do arquivo.
Caso algum problema aconteça, uma mensagem de erro será exibida no terminal.
---
## 9. Registando as mensagens
```javascript
salvarlogsistema('Inicialização do servidor concluído!\n');
salvarlogsistema('Conexão com o banco de dados estabelecida!\n');
```
Essas duas chamadas registram informações importantes no arquivo de log.
A primeira registra que o servidor foi inicializado.
A segunda registra que a conexão com o banco de dados foi estabelecida.
---
# Arquivo utilitario.js
O arquivo `utilitario.js` contém a função responsável por formatar as mensagens antes de serem salvas.
```javascript
export function formatlog(mensagem){
    const dataAtual = new Date()
        .toISOString().split('T')[0];

    const horaAtual = new Date()
        .toLocaleTimeString();

    return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
}
```
## 10. Obtendo a data

```javascript
const dataAtual = new Date()
    .toISOString().split('T')[0];
```
É criada uma nova data utilizando `new Date()`.
O `toISOString()` transforma a data em um formato padronizado.
O `split('T')[0]` pega somente a parte correspondente à data.
---
## 11. Obtendo a hora
```javascript
const horaAtual = new Date()
    .toLocaleTimeString();
```
O `toLocaleTimeString()` obtém a hora atual de acordo com as configurações locais.
---
## 12. Montando o registro
```javascript
return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
```
A função junta a data, a hora e a mensagem em um único texto.
O resultado ficará parecido com:
```text
[2026-09-15 - 21:00:00]: Inicialização do servidor concluído!
```
---
## 13. Exportação da função
```javascript
export function formatlog(mensagem)
```
A palavra `export` permite que a função seja utilizada em outro arquivo.
No `index.js`, ela é importada desta maneira:
```javascript
import { formatlog } from './utilitario.js';
```
A extensão `.js` é necessária nesse import porque o projeto está utilizando módulos ESM.
---
## Resultado
Ao executar o programa, a pasta `logs` é criada automaticamente e dentro dela é criado o arquivo `sislog.log`.
As mensagens são armazenadas com a data e a hora, facilitando o acompanhamento das atividades do sistema.
Exemplo:
```text
[2026-09-15 - 21:00:00]: Inicialização do servidor concluído!

[2026-09-15 - 21:00:01]: Conexão com o banco de dados estabelecida!
```
Com essa atividade foi possível praticar o uso de **módulos ESM no Node.js**, importação e exportação de funções, manipulação de arquivos e diretórios e criação de um sistema simples de registro de logs.


AULA 03



## Filtrando erros com Streams
Nesta atividade foi desenvolvido um programa em Node.js para ler o arquivo `servidor.log` e encontrar todas as linhas que possuem a palavra `ERROR`.
Para isso, foram utilizados os módulos `fs` e `readline`. O módulo `fs` permite trabalhar com arquivos, enquanto o `readline` facilita a leitura do arquivo linha por linha.
### 1. Importação dos módulos
```javascript
import fs from 'fs';
import Readline from 'readline';
```
O módulo `fs` é utilizado para criar os Streams de leitura e escrita. O módulo `readline` é utilizado para analisar o arquivo uma linha por vez.
### 2. Função principal
```javascript
async function filtrarErros() {
```
A função foi definida como `async` porque utiliza o `for await`, que permite percorrer as linhas do arquivo de forma assíncrona.
### 3. Criação dos Streams
```javascript
const streamLeitura = fs.createReadStream('servidor.log');
const streamEscrita = fs.createWriteStream('apenas_erros.log');
```
O `createReadStream` realiza a leitura do arquivo `servidor.log` aos poucos, evitando carregar todo o arquivo na memória.
O `createWriteStream` cria o arquivo `apenas_erros.log`, onde serão armazenadas somente as linhas que possuem erros.
### 4. Leitura linha por linha
```javascript
const leitorLinhaAlinha = Readline.createInterface({
    input: streamLeitura,
    crlfDelay: Infinity
});
```
O `readline` recebe o Stream de leitura e permite que o arquivo seja processado linha por linha.
O `crlfDelay: Infinity` ajuda o programa a reconhecer corretamente as quebras de linha em diferentes formatos de arquivos.
### 5. Contagem dos erros
```javascript
let totalErros = 0;
```
Essa variável é utilizada para contar quantas linhas contendo `ERROR` foram encontradas durante o processamento.
### 6. Filtrando as linhas
```javascript
for await (const linha of leitorLinhaAlinha) {
    if (linha.includes('ERROR')) {
        streamEscrita.write(linha + '\n');
        totalErros++;
    }
}
```
O `for await` percorre cada linha do arquivo.
O método `includes('ERROR')` verifica se a palavra `ERROR` está presente na linha.
Quando um erro é encontrado:
* A linha é gravada no arquivo `apenas_erros.log`;
* A variável `totalErros` é incrementada;
* O programa continua analisando as próximas linhas.
Dessa maneira, somente os registros de erro são armazenados no novo arquivo.
### 7. Monitoramento da memória
```javascript
function exibirConsumeMemoria(consumo) {
    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);
    const heapMB = (memoria.heapUsed / 1024 / 1024).toFixed(2);
    console.log(
        `[${consumo}] RSS: ${rssMB} MB | Heap utilizado: ${heapMB} MB`
    );
}
```
Essa função mostra o consumo de memória do programa.
O `process.memoryUsage()` obtém informações sobre a memória utilizada pelo processo do Node.js.
São apresentados principalmente:
* **RSS:** quantidade de memória ocupada pelo processo;
* **eap utilizado:** quantidade de memória utilizada pelo JavaScript.
A função é chamada no início e no final do processamento para permitir a comparação do consumo de memória.
### 8. Execução do programa
```javascript
filtrarErros();
```
Por fim, a função `filtrarErros()` é executada e inicia todo o processo de leitura, filtragem e gravação.
### Resultado
Ao executar o programa, o arquivo `servidor.log` é analisado linha por linha. Todas as linhas que contêm `ERROR` são copiadas para o arquivo `apenas_erros.log`.
No final, o programa informa a quantidade total de erros encontrados e apresenta o consumo de memória no início e no final da execução.
Essa atividade demonstra na prática a utilização de **Streams no Node.js**, mostrando como é possível processar arquivos grandes de maneira eficiente sem precisar carregar todo o conteúdo na memória de uma única vez.







# Aula 15 - Tratamento de Erros, Status Codes e Logging com NestJS

Nesta aula, o foco principal foi a evolução do backend para um nível mais robusto, profissional e seguro. Aprendemos a lidar de forma declarativa com o fluxo de exceções da aplicação, garantindo que a API responda com os **Status Codes HTTP** adequados e forneça mensagens claras tanto para o cliente que consome a aplicação quanto para o desenvolvedor que monitora o servidor.

---

## 🎯 Objetivos e Conceitos Ensinados

### 1. Respostas HTTP Precisas (Status Codes)
Uma API REST eficiente precisa se comunicar corretamente através dos códigos de status HTTP. Em vez de retornar erros genéricos do servidor (`500 Internal Server Error`), implementamos o lançamento de exceções específicas do NestJS (`HttpException`):
* **`400 Bad Request`**: Disparado quando o cliente envia dados num formato inválido ou inesperado na requisição (por exemplo, passar letras em um campo de ID que deveria ser numérico).
* **`404 Not Found`**: Disparado quando a requisição é válida do ponto de vista sintático, mas o recurso solicitado não existe no banco ou na lista de dados.
* **`200 OK`**: Retornado automaticamente pelo NestJS quando a busca é realizada com sucesso e os dados são entregues no corpo da resposta.

### 2. Validação e Tratamento de Parâmetros
Implementamos uma camada defensiva dentro do *controller* para validar o parâmetro de rota (`:id`):
* O parâmetro recebido via URL chega originalmente como uma `string`.
* Convertemos o valor com `Number(idProduto)` e utilizamos a função `isNaN()` para verificar se o valor informado realmente pode ser tratado como um número.
* Caso a conversão falhe, interrompemos a execução do método imediatamente lançando uma exceção de requisição inválida.

### 3. Monitoramento em Tempo Real com `Logger`
Para que os desenvolvedores saibam o que está acontecendo no servidor em tempo de execução sem poluir o console com `console.log`, utilizamos o serviço oficial `@nestjs/common` -> `Logger`:
* Instanciamos o `Logger` identificando o contexto da classe (`ProdutosController.name`).
* Utilizamos o método `this.logger.warn()` para registrar no terminal avisos importantes em amarelo (como tentativas de busca com IDs inválidos ou buscas por produtos inexistentes).

### 4. Testes e Validação na Prática
Utilizamos a extensão **Thunder Client** integrada ao VS Code para simular requisições HTTP reais do tipo `GET`. Validamos o formato das respostas JSON retornadas, o tempo de resposta do servidor, a estrutura dos objetos e se o código de status HTTP retornado era o esperado.

---

## 💻 Código Fonte Explicado

### 📄 `produtos.service.ts`
O serviço é responsável por gerenciar e centralizar a fonte de dados (neste caso, um array estático de produtos fictícios) e expor os métodos de consulta para a camada de controle.

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  // Base de dados simulada contendo a lista de produtos da aplicação
  produtos = [
    { id: 1, nome: 'Arroz Namorados', preco: 9.99 },
    { id: 2, nome: 'Feijão Timbiras', preco: 7.99 },
    { id: 3, nome: 'Macarrão Galo', preco: 5.99 },
    { id: 4, nome: 'Açúcar União', preco: 4.99 },
    { id: 5, nome: 'Sal Lebre', preco: 2.99 },
    { id: 6, nome: 'morango do amor', preco: 25.50 },
  ];

  // Método responsável por retornar toda a lista de produtos
  listarProdutos() {
    return this.produtos;
  }
}