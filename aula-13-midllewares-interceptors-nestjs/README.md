# Middleware de Segurança e Logs com NestJS

## 📌 Descrição
Este projeto utiliza um middleware no NestJS para registrar informações sobre as requisições HTTP e controlar o acesso às rotas administrativas. O middleware verifica o cabeçalho `x-user-base` e permite o acesso às rotas `/admin` somente quando o valor informado é `Administrador`.

## 🎯 Objetivo
Aprender a implementar middlewares no NestJS, registrar requisições, validar cabeçalhos HTTP e bloquear acessos não autorizados.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **NestJS** — framework para desenvolvimento back-end.
- **TypeScript** — linguagem utilizada no projeto.
- **Express** — biblioteca HTTP utilizada pelo NestJS.

## 📂 Código utilizado

### `logger.middleware.ts`

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const currentUrl = req.originalUrl || req.url;

    console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);

    if (currentUrl.startsWith('/admin')) {
      const base = req.headers['x-user-base'];

      if (base !== 'Administrador') {
        return res.status(403).json({
          codigo: 403,
          mensagem: 'Acesso negado: privilégio de Administrador necessário',
          registro: new Date(),
        });
      }
    }

    next();
  }
}
```

## 📖 Explicação do código

- `@Injectable()`: permite que a classe seja gerenciada pelo sistema de dependências do NestJS.
- `NestMiddleware`: interface utilizada para implementar um middleware.
- `use(req, res, next)`: método executado durante o processamento da requisição.
- `req.method`: identifica o método HTTP, como GET, POST, PUT ou DELETE.
- `req.path`: informa o caminho da requisição.
- `req.originalUrl || req.url`: obtém a URL utilizada para verificar se a requisição acessa uma rota administrativa.
- `req.headers['x-user-base']`: lê o cabeçalho que informa a base ou função do usuário.
- `currentUrl.startsWith('/admin')`: verifica se a URL começa com `/admin`.
- `res.status(403).json(...)`: bloqueia a requisição e retorna uma resposta JSON com status HTTP 403.
- `next()`: permite que a requisição continue para o próximo middleware ou controlador quando não é bloqueada.

## ▶️ Como executar

**1.** Abra o terminal na pasta do projeto NestJS.

**2.** Instale as dependências, caso necessário:

```bash
npm install
```

**3.** Registre o middleware no módulo desejado, geralmente em `app.module.ts`:

```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware.js';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

Adapte o caminho do `LoggerMiddleware` à localização real do arquivo e preserve os módulos e controladores que já existem no projeto.

**4.** Inicie o servidor:

```bash
npm run start:dev
```

## 🧪 Como testar

Utilize o Postman ou outra ferramenta de requisições HTTP para acessar uma rota administrativa existente.

**Teste 1 — Acesso autorizado**

- Método: `GET`
- URL: `http://localhost:3000/admin`
- Header:
  - Chave: `x-user-base`
  - Valor: `Administrador`

A requisição poderá continuar para o controlador, desde que a rota exista e não haja outro bloqueio.

**Teste 2 — Acesso negado**

Envie a requisição sem o cabeçalho `x-user-base` ou com um valor diferente de `Administrador`.

Resposta esperada — HTTP 403:

```json
{
  "codigo": 403,
  "