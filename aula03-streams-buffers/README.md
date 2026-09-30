import fs from 'fs';
import Readline from 'readline';

async function filtrarErros() {

    console.log('Iniciando processo com Steam...');
    exibirConsumeMemoria('inicio');

    const streamLeitura = fs.createReadStream('servidor.log');
    const streamEscrita = fs.createWriteStream('apenas_erros.log');
    const leitorLinhaAlinha = Readline.createInterface({input: streamLeitura,crlfDelay: Infinity});

    let totalErros = 0;
    for await (const linha of leitorLinhaAlinha){

        if (linha.includes('ERROR')){
            streamEscrita.write(linha + '\n');
            totalErros++;
        }

    }

    exibirConsumeMemoria('Fim');
    console.log('processamento concluido!\n');
    console.log(`Quantidade de Erros Encontrados: ${totalErros} linhas.\n`)

}

filtrarErros();

function exibirConsumeMemoria(consumo){

    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss/ 1024/ 1024).toFixed(2);
    const heapMB = (memoria.heapUsed /1024 /1024).toFixed(2);
    console.log(`[${consumo}] RSS: ${rssMB} MB | Heap utilizado: ${heapMB} MB`);

}




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
* **Heap utilizado:** quantidade de memória utilizada pelo JavaScript.

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
