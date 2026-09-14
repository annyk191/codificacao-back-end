import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatlog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarlogsistema(mensagemlog) {
    try {
        const pastalog = path.join(__dirname, 'logs');
        const arquivolog = path.join(pastalog, 'sislog.log');

        await fs.mkdir(pastalog, { recursive: true });
        const registro = formatlog(mensagemlog);
        await fs.appendFile(arquivolog, registro, 'utf-8');
        console.log('log registrado com sucesso....');
    } catch (erro) {
        console.error('erro ao registrar log ', erro);
    }
}

salvarlogsistema('Inicialização do servidor concluído!\n');
salvarlogsistema('Conexão com o banco de dados estabelecida!\n');




export function formatlog(mensagem){
    const dataAtual = new Date()
    .toISOString().split('T')[0];

    const horaAtual = new Date()
    .toLocaleTimeString();

    return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
}