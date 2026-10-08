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