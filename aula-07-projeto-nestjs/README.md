# Aula 07 — Servidor NestJS

## 📌 Descrição
Este projeto utiliza o framework NestJS para criar uma rota HTTP que retorna uma mensagem de status do servidor. A aplicação utiliza um Controller para receber as requisições e um Service para fornecer a resposta.

## 🎯 Objetivo
Aprender a estrutura básica do NestJS, utilizando os conceitos de Controller, Service, injeção de dependência e rotas HTTP.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **NestJS** — framework para desenvolvimento de aplicações back-end.
- **TypeScript** — linguagem utilizada no projeto.

## 📂 Código utilizado

### 1. AppService — `app.service.ts`

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor Nest.JS Aivo [Aula 07]';
  }
}
```

### 2. AppController — `app.controller.ts`

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

## 📖 Explicação do código

### AppService
- `@Injectable()`: permite que a classe seja gerenciada pelo sistema de injeção de dependência do NestJS.
- `AppService`: classe responsável pela lógica do serviço.
- `getHello()`: método que retorna a mensagem `Servidor Nest.JS Aivo [Aula 07]`.

### AppController
- `@Controller('status')`: define o caminho principal da rota como `/status`.
- `@Get()`: configura o método para responder às requisições HTTP GET.
- `constructor(private readonly appService: AppService)`: recebe o serviço por injeção de dependência.
- `appService.getHello()`: chama o método do serviço e retorna sua mensagem.

## ▶️ Como executar

**1.** Abra o terminal na pasta do projeto NestJS.

**2.** Instale as dependências, se necessário:

```bash
npm install
```

**3.** Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

**4.** Acesse a rota no navegador:

`http://localhost:3000/status`

## 💻 Resultado esperado

```text
Servidor Nest.JS Aivo [Aula 07]
```

A resposta será exibida no navegador ou na ferramenta utilizada para realizar a requisição HTTP.

## 📚 Aprendizados
- Criação de serviços com `@Injectable()`.
- Criação de controladores com `@Controller()`.
- Configuração de rotas GET.
- Injeção de dependência no NestJS.
- Separação de responsabilidades entre Controller e Service.

## 👩‍💻 Conclusão
A atividade demonstra a estrutura básica de uma aplicação NestJS, mostrando como um Controller recebe requisições e utiliza um Service para retornar informações. Essa organização facilita a manutenção e a expansão de aplicações back-end.


