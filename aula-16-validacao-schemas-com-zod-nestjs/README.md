# Validação de Dados com Zod e TypeScript

## 📌 Descrição
Este projeto utiliza a biblioteca Zod para validar os dados de colaboradores, verificando nome, e-mail, idade e departamento antes de aceitar as informações.

## 🎯 Objetivo
Aprender a criar schemas de validação com Zod, definir regras para os campos e utilizar TypeScript para inferir tipos a partir das validações.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **TypeScript** — linguagem com tipagem estática.
- **Zod** — biblioteca para validação de dados.

## 📂 Código utilizado

### `colaborador.schema.ts`

```typescript
import { z } from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string()
        .min(3, { message: 'o nome deve ter no minimo 3 letras' }),

    email: z.email({
        message: 'o email deve ser valido'
    }),

    idade: z.number({
        message: 'a idade deve ser um numéro valido'
    })
        .min(18, { message: 'a idade minima é 18 anos!' })
        .max(65, { message: 'a idade maxima é 65 anos!' }),

    departamento: z.enum(['TI', 'RH', 'COMERCIAL', 'FINANCEIRO'], {
        error: () => ({
            message: 'departamento deve ser obrigatoriamente TI, RH, COMERCIAL ou FINANCEIRO'
        })
    }),
});

export type colaborador = z.infer<typeof colaboradorSchema>;
```

## 📖 Explicação do código

- `import { z } from 'zod'`: importa os recursos da biblioteca Zod.
- `z.object()`: define um objeto com os campos que serão validados.
- `nome: z.string()`: exige que o nome seja um texto.
- `.min(3)`: determina que o nome tenha pelo menos três caracteres.
- `z.email()`: valida o formato do endereço de e-mail.
- `z.number()`: exige que a idade seja um número.
- `.min(18)`: define a idade mínima de 18 anos.
- `.max(65)`: define a idade máxima de 65 anos.
- `z.enum()`: permite somente os departamentos definidos: `TI`, `RH`, `COMERCIAL` e `FINANCEIRO`.
- `z.infer<typeof colaboradorSchema>`: cria automaticamente um tipo TypeScript com base no schema de validação.

## 📋 Regras de validação

| Campo | Regra |
|---|---|
| Nome | Deve ter pelo menos 3 caracteres. |
| E-mail | Deve possuir um formato válido. |
| Idade | Deve ser um número entre 18 e 65 anos. |
| Departamento | Deve ser TI, RH, COMERCIAL ou FINANCEIRO. |

## ▶️ Como instalar

**1.** Instale o Zod na pasta do projeto:

```bash
npm install zod
```

**2.** Crie o arquivo `colaborador.schema.ts` e adicione o código apresentado.

**3.** Utilize o schema no código responsável por receber ou cadastrar colaboradores.

## 🧪 Exemplo de utilização

```typescript
import { colaboradorSchema } from './colaborador.schema.js';

const colaborador = {
    nome: 'Maria Silva',
    email: 'maria@email.com',
    idade: 25,
    departamento
