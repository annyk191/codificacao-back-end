# Configuração de Variáveis de Ambiente com Node.js

## 📌 Descrição
Este projeto utiliza o pacote `dotenv` para carregar variáveis de ambiente de um arquivo `.env`, permitindo configurar a porta da aplicação, a chave de API de pagamento e a URL do banco de dados.

## 🎯 Objetivo
Aprender a utilizar variáveis de ambiente para armazenar configurações externas ao código e validar informações obrigatórias antes de iniciar a aplicação.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **JavaScript** — linguagem de programação.
- **dotenv** — pacote para carregar variáveis de ambiente de um arquivo `.env`.

## 📂 Código utilizado

```javascript
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
```

## 📖 Explicação do código

- `import dotenv from 'dotenv'`: importa o pacote dotenv.
- `dotenv.config()`: carrega as variáveis definidas no arquivo `.env`.
- `process.env.PORT`: obtém a porta configurada ou utiliza `8080` como padrão.
- `process.env.API_KEY_PAGAMENTO`: obtém a chave da API de pagamento.
- `process.env.DATABASE_URL`: obtém a URL de conexão com o banco de dados.
- `if (!apikey)`: verifica se a chave da API foi definida.
- `console.error()`: exibe uma mensagem de erro no terminal.
- `process.exit(1)`: encerra a aplicação indicando uma falha.
- `apikey.length`: retorna a quantidade de caracteres da chave, sem exibir seu conteúdo.
- `iniciarAplicacao()`: executa a função principal da aplicação.

## ▶️ Como executar

**1.** Inicialize o projeto, caso ainda não tenha feito isso:

```bash
npm init -y
```

**2.** Instale o dotenv:

```bash
npm install dotenv
```

**3.** No arquivo `package.json`, configure o uso de módulos ES:

```json
"type": "module"
```

**4.** Crie um arquivo chamado `.env` na raiz do projeto:

```env
PORT=8080
API_KEY_PAGAMENTO=sua_chave_de_teste
DATABASE_URL=mysql://usuario:senha@localhost:3306/meu_banco
```

Substitua os valores de exemplo pelas configurações adequadas ao seu ambiente. Não utilize credenciais reais em arquivos compartilhados.

**5.** Salve o código em um arquivo chamado `app.js`.

**6.** Execute a aplicação:

```bash
node app.js
```

## 💻 Exemplo de saída

```text
=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ===
Serviço rodando na porta 8080
Banco de dados mysql://usuario:senha@localhost:3306/meu_banco
API Key configurada com sucesso.
Status da API: Chave de tamanho 18 autenticada.
```

*Observação: os valores são ilustrativos e dependem das configurações definidas no arquivo `.env`.*

## 🔐 Segurança
- Não compartilhe chaves de API, senhas ou credenciais.
- Adicione o arquivo `.env` ao `.gitignore` para evitar enviá-lo ao GitHub.
- Crie um arquivo `.env.example` com nomes das variáveis e valores fictícios.
- A verificação da existência da chave não confirma que ela é válida perante o serviço de pagamento.

## 📚 Aprendizados
- Configuração de variáveis de ambiente.
- Utilização do pacote dotenv.
- Validação de configurações obrigatórias.
- Encerramento seguro diante de configurações ausentes.
- Boas práticas para proteger informações sensíveis.

## 👩‍💻 Conclusão
A atividade demonstra como configurar uma aplicação Node.js por meio de variáveis de ambiente, validar dados essenciais e separar as configurações do código-fonte, contribuindo para um desenvolvimento back-end mais organizado e seguro.
