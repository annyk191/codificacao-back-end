# Aula 14 - Servidor Edge Runtime com Vercel

## 📚 Sobre a aula

Nesta aula foi desenvolvido um servidor utilizando o **Vercel Edge Runtime**.

O objetivo foi criar uma função que retorna uma resposta em formato JSON, mostrando uma mensagem de sucesso, o horário do servidor, a região de execução e o tempo que a função levou para ser executada.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Vercel
- Edge Runtime

## 💻 Código

```ts
export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const inicio = Date.now();

    return new Response(
        JSON.stringify({
            mensagem: 'Função executada com sucesso',
            horarioServidor: new Date().toLocaleString('pt-BR'),
            regiao: 'local-dev',
            tempoExecução: `${Date.now() - inicio} ms`,
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        },
    );
}