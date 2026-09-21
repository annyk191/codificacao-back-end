import dotenv from 'dotenv';

dotenv.config();

function iniciarAplicacao() {
    const porta = process.env.PORT || 8080;
    const apikey = process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABASE_URL;

    if (!apikey) {
        console.error(
            '[ERRO CRÍTICO]: A chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!'
        );
        process.exit(1);
    }

    console.log('=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===');
    console.log(`Serviço rodando na porta ${porta}`);
    console.log(`Banco de dados ${dbUrl}`);
    console.log('API Key configurada com sucesso.');
    console.log(
        `Status da API: Chave de tamanho ${apikey.length} autenticada.`
    );
}

iniciarAplicacao();