import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatlog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarlogsistema(mensagemlog) {
    try {
        const pastalog = path.join(__dirname, 'logs');
        const arquivolog = path.join(pastalog, 'sislog.log');

        await fs.mkdir(pastalog, { recursive: true });
        const registro = formatlog(mensagemlog);
        await fs.appendFile(arquivolog, registro, 'utf-8');
        console.log('log registrado com sucesso....');
    } catch (erro) {
        console.error('erro ao registrar log ', erro);
    }
}

salvarlogsistema('Inicialização do servidor concluído!\n');
salvarlogsistema('Conexão com o banco de dados estabelecida!\n');




export function formatlog(mensagem){
    const dataAtual = new Date()
    .toISOString().split('T')[0];

    const horaAtual = new Date()
    .toLocaleTimeString();

    return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
}





# Aula 02 - Módulos CommonJS e ESM

## Sistema de Registro de Logs

Nesta atividade foi desenvolvido um sistema simples de registro de logs utilizando **Node.js e módulos ESM (ECMAScript Modules)**.

O programa cria uma pasta chamada `logs`, cria ou utiliza o arquivo `sislog.log` e registra mensagens informando acontecimentos do sistema, como a inicialização do servidor e a conexão com o banco de dados.

---

## 1. Importação dos módulos

```javascript
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatlog } from './utilitario.js';
```

Foram importados alguns módulos para realizar diferentes funções.

O módulo `fs/promises` permite trabalhar com arquivos e pastas utilizando operações assíncronas.

O módulo `path` é utilizado para trabalhar com caminhos de arquivos e diretórios.

O `fileURLToPath` transforma a URL do arquivo atual em um caminho que pode ser utilizado pelo sistema operacional.

Por fim, a função `formatlog` é importada do arquivo `utilitario.js`. Essa função é responsável por organizar a mensagem do log com data e hora.

---

## 2. Obtendo o caminho do arquivo

```javascript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Como o projeto utiliza módulos ESM, as variáveis `__filename` e `__dirname` não estão disponíveis automaticamente.

Por isso, `fileURLToPath(import.meta.url)` é utilizado para descobrir o caminho do arquivo atual.

Depois, `path.dirname()` é utilizado para descobrir o diretório onde o arquivo está localizado.

---

## 3. Função para salvar os logs

```javascript
async function salvarlogsistema(mensagemlog) {
```

A função `salvarlogsistema()` recebe uma mensagem que será registrada no arquivo de log.

Ela foi criada como `async` porque utiliza operações assíncronas do módulo `fs/promises`.

---

## 4. Definindo a pasta e o arquivo de log

```javascript
const pastalog = path.join(__dirname, 'logs');
const arquivolog = path.join(pastalog, 'sislog.log');
```

O `path.join()` é utilizado para montar os caminhos corretamente.

A variável `pastalog` representa a pasta `logs`.

A variável `arquivolog` representa o arquivo `sislog.log`, que ficará dentro da pasta `logs`.

A estrutura ficará assim:

```text
aula02-modulos-commonjs-esm/
│
├── index.js
├── utilitario.js
│
└── logs/
    └── sislog.log
```

---

## 5. Criando a pasta

```javascript
await fs.mkdir(pastalog, { recursive: true });
```

Esse comando cria a pasta `logs`.

A opção `recursive: true` permite que a pasta seja criada mesmo que os diretórios necessários ainda não existam.

Se a pasta já existir, o programa não apresenta erro por causa disso.

---

## 6. Formatando o log

```javascript
const registro = formatlog(mensagemlog);
```

Aqui é chamada a função `formatlog()`, que foi criada no arquivo `utilitario.js`.

Ela recebe a mensagem e acrescenta a data e a hora antes de salvar o registro.

---

## 7. Salvando o registro

```javascript
await fs.appendFile(arquivolog, registro, 'utf-8');
```

O `appendFile()` adiciona o novo registro ao final do arquivo `sislog.log`.

Isso significa que os registros anteriores não são apagados.

O `'utf-8'` define a codificação utilizada para salvar o texto.

---

## 8. Tratamento de erros

```javascript
} catch (erro) {
    console.error('erro ao registrar log ', erro);
}
```

O `try...catch` é utilizado para tratar possíveis erros durante a criação da pasta ou gravação do arquivo.

Caso algum problema aconteça, uma mensagem de erro será exibida no terminal.

---

## 9. Registrando as mensagens

```javascript
salvarlogsistema('Inicialização do servidor concluído!\n');
salvarlogsistema('Conexão com o banco de dados estabelecida!\n');
```

Essas duas chamadas registram informações importantes no arquivo de log.

A primeira registra que o servidor foi inicializado.

A segunda registra que a conexão com o banco de dados foi estabelecida.

---

# Arquivo utilitario.js

O arquivo `utilitario.js` contém a função responsável por formatar as mensagens antes de serem salvas.

```javascript
export function formatlog(mensagem){
    const dataAtual = new Date()
        .toISOString().split('T')[0];

    const horaAtual = new Date()
        .toLocaleTimeString();

    return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
}
```

## 10. Obtendo a data

```javascript
const dataAtual = new Date()
    .toISOString().split('T')[0];
```

É criada uma nova data utilizando `new Date()`.

O `toISOString()` transforma a data em um formato padronizado.

O `split('T')[0]` pega somente a parte correspondente à data.

---

## 11. Obtendo a hora

```javascript
const horaAtual = new Date()
    .toLocaleTimeString();
```

O `toLocaleTimeString()` obtém a hora atual de acordo com as configurações locais.

---

## 12. Montando o registro

```javascript
return(`[${dataAtual} - ${horaAtual}]: ${mensagem}`);
```

A função junta a data, a hora e a mensagem em um único texto.

O resultado ficará parecido com:

```text
[2026-09-15 - 21:00:00]: Inicialização do servidor concluído!
```

---

## 13. Exportação da função

```javascript
export function formatlog(mensagem)
```

A palavra `export` permite que a função seja utilizada em outro arquivo.

No `index.js`, ela é importada desta maneira:

```javascript
import { formatlog } from './utilitario.js';
```

A extensão `.js` é necessária nesse import porque o projeto está utilizando módulos ESM.

---

## Resultado

Ao executar o programa, a pasta `logs` é criada automaticamente e dentro dela é criado o arquivo `sislog.log`.

As mensagens são armazenadas com a data e a hora, facilitando o acompanhamento das atividades do sistema.

Exemplo:

```text
[2026-09-15 - 21:00:00]: Inicialização do servidor concluído!

[2026-09-15 - 21:00:01]: Conexão com o banco de dados estabelecida!
```

Com essa atividade foi possível praticar o uso de **módulos ESM no Node.js**, importação e exportação de funções, manipulação de arquivos e diretórios e criação de um sistema simples de registro de logs.
