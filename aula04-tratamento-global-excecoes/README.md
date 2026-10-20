# Tratamento de Erros com Express e Node.js

## 📌 Descrição
Este projeto utiliza o Express.js para criar um servidor HTTP com rotas de sucesso e de erros, demonstrando como tratar erros síncronos, assíncronos e falhas inesperadas no Node.js.

## 🎯 Objetivo
Aprender a criar rotas, utilizar o middleware de tratamento de erros e monitorar falhas que podem acontecer durante a execução do servidor.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **Express.js** — framework para criação de servidores e APIs.
- **JavaScript** — linguagem utilizada no desenvolvimento.

## 📂 Código utilizado

```javascript
import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]:', err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PROMISE REJEITADA - unhandledRejection]:', reason);
});

app.get('/sucesso', (req, res) => {
    res.json({ sucess: true, message: 'Operação Realizada com Sucesso!' });
});

app.get('/erro-sincrono', (req, res, next) => {
    try {
        throw new Error('falha ao processar a regra de Negócio!');
    } catch (erro) {
        next(erro);
    }
});

app.get('/erro-assincrono', async (req, res, next) => {
    try {
        await Promise.reject(new Error('erro na consulta no banco de dados externo'));
    } catch (erro) {
        next(erro);
    }
});

app.use((err, req, res, next) => {
    console.error(`[LOG DE ERROR INTERNO]: ${err.stack}`);

    const status = err.status || 500;
    res.status(status).json({
        sucess: false,
        message: err.message || 'Erro interno do servidor'
    });
});

app.listen(3000, () => {
    console.log('Servidor Imortal rodando na porta 3000');
});
```

## 📖 Explicação do código

- `import express from 'express'`: importa o Express.js.
- `express()`: cria a aplicação do servidor.
- `app.use(express.json())`: permite interpretar requisições com conteúdo JSON.
- `process.on('uncaughtException')`: captura exceções não tratadas pelo código.
- `process.on('unhandledRejection')`: monitora rejeições de Promises que não foram tratadas.
- `app.get('/sucesso')`: cria uma rota que retorna uma resposta de sucesso.
- `app.get('/erro-sincrono')`: demonstra o tratamento de um erro síncrono com `try/catch` e `next(erro)`.
- `app.get('/erro-assincrono')`: simula uma falha assíncrona utilizando uma Promise rejeitada.
- `app.use((err, req, res, next) => {})`: middleware responsável por registrar erros e enviar uma resposta JSON ao cliente.
- `app.listen(3000)`: inicia o servidor na porta 3000.

## ▶️ Como executar

**1.** Instale o Node.js.

**2.** Inicialize o projeto:

```bash
npm init -y
```

**3.** Instale o Express:

```bash
npm install express
```

**4.** No arquivo `package.json`, adicione a configuração abaixo para utilizar `import`:

```json
"type": "module"
```

**5.** Salve o código em um arquivo chamado `servidor.js`.

**6.** Execute no terminal:

```bash
node servidor.js
```

O servidor estará disponível em `http://localhost:3000`.

## 🧪 Testando as rotas

| Rota | Resultado esperado |
|---|---|
| `/sucesso` | Retorna uma mensagem de sucesso. |
| `/erro-sincrono` | Retorna erro HTTP 500 com mensagem sobre a regra de negócio. |
| `/erro-assincrono` | Retorna erro HTTP 500 com mensagem sobre a consulta externa. |

Para testar, acesse os endereços no navegador:

- `http://localhost:3000/sucesso`
- `http://localhost:3000/erro-sincrono`
- `http://localhost:3000/erro-assincrono`

## 📚 Aprendizados
- Criação de servidores HTTP com Express.
- Desenvolvimento de rotas GET.
- Tratamento de erros síncronos e assíncronos.
- Utilização de middleware de erros.
- Monitoramento de