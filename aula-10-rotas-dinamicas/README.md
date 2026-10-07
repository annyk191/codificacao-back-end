Aula 10 - Rotas Dinâmicas
📚 Sobre o projeto

Nesta aula, trabalhamos com rotas dinâmicas utilizando NestJS, criando uma API para consultar informações de jogos através do seu ID.

O projeto foi organizado utilizando Controller e Service, separando as responsabilidades da aplicação.

🎯 Objetivo

O objetivo da aula foi aprender a criar rotas dinâmicas, receber parâmetros enviados pela URL e utilizar esses parâmetros para buscar informações específicas.

🛠️ O que foi desenvolvido

Foi criado o arquivo jogos.service.ts, responsável por armazenar uma lista de jogos e realizar a busca pelo ID.

Também foi criado o método:

buscarPorId(id: number)

Esse método procura na lista o jogo que possui o ID informado.

Caso o jogo não seja encontrado, utilizamos:

throw new NotFoundException(
  `Jogo com ID ${id} não localizado em nosso estoque.`
);

Assim, a API retorna uma mensagem informando que o jogo não foi localizado.

🌐 Rota dinâmica

No jogos.controller.ts, criamos uma rota utilizando o método GET:

@Get(':id')
buscarPorId(
  @Param('id', ParseIntPipe) id: string
) {
  const numId = +id;
  return this.jogosService.buscarPorId(numId);
}

A rota permite consultar um jogo passando seu ID diretamente pela URL:

GET /jogos/1

O @Param é utilizado para receber o valor do ID enviado na URL.

Também utilizamos o ParseIntPipe para trabalhar com o parâmetro como número.

📌 Conteúdos aprendidos

Durante a aula, aprendemos:

Criar rotas dinâmicas no NestJS;
Utilizar o @Get;
Utilizar @Param para receber parâmetros da URL;
Trabalhar com ParseIntPipe;
Criar métodos de busca dentro de um Service;
Separar a lógica entre Controller e Service;
Utilizar NotFoundException;
Retornar informações específicas através de um ID.
✅ Conclusão

Nesta atividade, aprendemos como criar uma API com rotas dinâmicas no NestJS, permitindo que o usuário informe um ID pela URL para consultar um jogo específico. Também aprendemos a tratar situações em que o ID informado não existe, tornando a API mais organizada e adequada para diferentes consultas.