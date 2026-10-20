# Servidor HTTP com Cabeçalhos de Segurança — Node.js

## 📌 Descrição
Este projeto utiliza o módulo nativo `http` do Node.js para criar um servidor web que recebe requisições, registra informações no terminal e retorna respostas em formato JSON. Também implementa cabeçalhos básicos de segurança HTTP.

## 🎯 Objetivo
Aprender a criar um servidor HTTP sem frameworks externos, trabalhar com rotas, códigos de status, respostas JSON e cabeçalhos de segurança.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **Módulo `http`** — criação de servidores HTTP.
- **JavaScript** — linguagem utilizada no desenvolvimento.

## 📂 Código utilizado

```javascript
import http from 'http';

const servidorWeb = http.createServer((req, res) => {
    console.log(`[LOG] Método Recebido: ${req.method} | Rota: ${req.url}`);

    const cabecalhoPadrao = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
    };

    if (req.url === '/status') {
        res.writeHead(200, {
            ...cabecalhoPadrao,
            'content-type': 'application/json'
        });
        res.end(JSON.stringify({ servidorWeb: 'Online' }));
    } else {
        res.writeHead(404, {
            ...cabecalhoPadrao,
            'content-type': 'application/json'
        });
        res.end(JSON.stringify({ erro: 'Página não encontrada!' }));
    }
});

servidorWeb.listen(3000, () => {
    console.log('Servidor Web ativo!');
    console.log('Porta: 3000');
});
```

## 📖 Explicação do código

- `import http from 'http'`: importa o módulo nativo HTTP do Node.js.
- `http.createServer()`: cria o servidor que recebe requisições e envia respostas.
- `req.method`: informa o método HTTP recebido, como `GET`.
- `req.url`: informa a rota acessada.
- `cabecalhoPadrao`: define cabeçalhos de segurança aplicados às respostas.
- `X-Content-Type-Options: nosniff`: impede que o navegador tente interpretar o conteúdo como um tipo diferente daquele declarado.
- `X-Frame-Options: DENY`: impede que a página seja exibida dentro de um `frame` ou `iframe`.
- `res.writeHead(200, ...)`: envia o status HTTP 200, indicando sucesso.
- `JSON.stringify()`: converte um objeto JavaScript em texto JSON.
- `res.end()`: finaliza a resposta HTTP.
- `res.writeHead(404, ...)`: informa que a rota solicitada não foi encontrada.
- `servidorWeb.listen(3000, ...)`: inicia o servidor na porta 3000.

## ▶️ Como executar

**1.** Verifique se o Node.js está instalado:

```bash
node -v
```

**2.** No arquivo `package.json`, configure os módulos ES:

```json
"type": "module"
```

**3.** Salve o código em um arquivo chamado `servidor.js`.

**4.** Execute no terminal:

```bash
node servidor.js
```

## 🧪 Como testar

Com o servidor em execução, acesse os endereços abaixo no navegador:

- `http://localhost:3000/status` — retorna o status do servidor.
- `http://localhost:3000/outra-rota` — retorna uma mensagem de página não encontrada.

## 💻 Exemplos de respostas

**Rota `/status` — HTTP 200**

```json
{
  "servidorWeb": "Online"
}
```

**Rota inexistente — HTTP 404**

```json
{
  "erro": "Página não encontrada!"
}
```

## 📚 Aprendizados
- Criação de servidores HTTP com o módulo nativo `http`.
- Registro de requisições no terminal.
- Tratamento de rotas.
- Utilização dos códigos de status HTTP 200 e 404.
- Envio de respostas no formato JSON.
- Aplicação de cabeçalhos básicos de segurança.

## 👩‍💻 Conclusão
A atividade demonstra como construir um servidor web básico com Node.js, organizar respostas HTTP e aplicar cabeçalhos de segurança para melhorar a proteção das respostas enviadas ao navegador.
