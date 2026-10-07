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

