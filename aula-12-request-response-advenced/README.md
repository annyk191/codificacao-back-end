# Segurança de API com NestJS

## 📌 Descrição
Este projeto implementa uma rota protegida no NestJS que verifica uma chave de API enviada no cabeçalho HTTP da requisição. O acesso é concedido quando a chave corresponde ao valor configurado no código; caso contrário, o servidor retorna uma resposta de acesso negado.

## 🎯 Objetivo
Aprender a trabalhar com cabeçalhos HTTP, validar chaves de API, controlar o acesso a rotas e retornar códigos de status apropriados.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **NestJS** — framework para desenvolvimento back-end.
- **TypeScript** — linguagem utilizada no projeto.
- **Express** — biblioteca utilizada para enviar as respostas HTTP.

## 📂 Código utilizado

### `seguranca.controller.ts`

```typescript
import { Controller, Get, Headers, Res } from "@nestjs/common";
import type { Response } from "express";

@Controller('secret')
export class segurancaController {
    @Get()
    acessAreaSecret(
        @Headers('y-api-key') apikey: string,
        @Res() res: Response
    ) {
        if (apikey === 'FULLSTACK-2026') {
            res.setHeader('y-auth-status', 'verificado');
            return res.status(200).json({
                menssagem: 'Acesso concedido a Area secreta!',
                log: new Date(),
            });
        }

        return res.status(403).json({
            erro: 'forbidden',
            mensagem: 'Chave Api inválida ou ausente',
            log: new Date(),
        });
    }
}
```

## 📖 Explicação do código

- `@Controller('secret')`: define o caminho principal da rota como `/secret`.
- `@Get()`: permite acessar a rota por meio de uma requisição HTTP GET.
- `@Headers('y-api-key')`: lê a chave de API enviada no cabeçalho da requisição.
- `@Res()`: permite controlar diretamente a resposta HTTP.
- `if (apikey === 'FULLSTACK-2026')`: compara a chave recebida com a chave esperada.
- `res.setHeader('y-auth-status', 'verificado')`: adiciona um cabeçalho indicando que a autenticação foi verificada.
- `res.status(200).json(...)`: retorna uma resposta de sucesso quando a chave está correta.
- `res.status(403).json(...)`: retorna o código HTTP 403 quando a chave é inválida ou está ausente.
- `new Date()`: registra a data e o horário da resposta.

## ▶️ Como executar

**1.** Abra o terminal na pasta do projeto NestJS.

**2.** Instale as dependências, caso ainda não estejam instaladas:

```bash
npm install
```

**3.** Inicie o servidor:

```bash
npm run start:dev
```

**4.** Teste a rota:

`http://localhost:3000/secret`

## 🧪 Como testar

Utilize o Postman ou outra ferramenta de requisições HTTP.

**Teste 1 — Chave válida**

- Método: `GET`
- URL: `http://localhost:3000/secret`
- Header:
  - Chave: `y-api-key`
  - Valor: `FULLSTACK-2026`

Resposta esperada — HTTP 200:

```json
{
  "menssagem":
