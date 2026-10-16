# 📦 API de Cadastro de Produtos com NestJS e Swagger

## 📌 Sobre o projeto

Este projeto foi desenvolvido utilizando **NestJS** e **Swagger** para criar e documentar uma API REST de cadastro de produtos. A documentação permite testar os endpoints diretamente pelo navegador, facilitando a visualização das requisições e respostas da API.

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Swagger
- API REST
- JSON

## ⚙️ Funcionalidades

- Cadastro de novos produtos.
- Recebimento de dados por meio de requisições HTTP.
- Documentação dos endpoints com Swagger.
- Definição de respostas HTTP para as operações.
- Retorno dos dados do produto cadastrado.

## 🛠️ Endpoint disponível

### Cadastrar produto

**Método:** `POST`

**Rota:** `/Produtos`

**URL local:** `http://localhost:3000/Produtos`

Esse endpoint permite cadastrar um novo produto enviando os dados no formato JSON.

### 📥 Exemplo de requisição

```json
{
  "nome": "teclado mecanico redragon xyz",
  "preco": 199.99,
  "categoria": "periferico"
}
```

### 📤 Exemplo de resposta

**Código HTTP:** `201 Created`

```json
{
  "id": 67,
  "nome": "teclado mecanico redragon xyz",
  "preco": 199.99,
  "categoria": "periferico",
  "criadoEm": "16/10/2026"
}
```

*Observação: o exemplo ilustra a estrutura esperada com base no código e na execução apresentados. O valor do ID e a data podem variar conforme a implementação.*

## 📚 Documentação com Swagger

A documentação interativa pode ser acessada pelo endereço:

`http://localhost:3000/docs`

Por meio do Swagger UI, é possível visualizar os endpoints, preencher o corpo da requisição, executar operações e consultar os códigos de resposta.

## ▶️ Como executar o projeto

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

4. Acesse a documentação no navegador:

`http://localhost:3000/docs`

## 📋 Códigos de resposta

| Código | Descrição |
|---|---|
| `201` | Produto cadastrado com sucesso. |
| `400` | Dados enviados inválidos ou malformados. |

## 💻 Exemplo de implementação

O controller utiliza os decorators do NestJS e do Swagger para documentar e executar o cadastro:

```typescript
@Post()
@ApiOperation({
  summary: 'Cadastrar um novo produto no estoque',
})
@ApiResponse({
  status: 201,
  description: 'Produto cadastrado com sucesso.',
})
@ApiResponse({
  status: 400,
  description: 'Payload enviado contém dados mal formatados ou inválidos.',
})
async create(@Body() criarprodutodto: CriarProdutoDto) {
  return {
    id: 67,
    ...criarprodutodto,
    criadoEm: new Date().toLocaleDateString(),
  };
}
```

## 🎯 Objetivo

Praticar a criação de APIs REST com NestJS, a utilização de DTOs para receber dados, a documentação de endpoints com Swagger e o tratamento de respostas HTTP.

---

**Projeto desenvolvido para fins educacionais durante o curso de Programador Full Stack.**