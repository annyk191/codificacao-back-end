# Upload de Imagens com NestJS

## 📌 Descrição
Este projeto implementa uma funcionalidade de upload de imagens utilizando o NestJS. A aplicação permite receber arquivos por meio de requisições HTTP, validar suas extensões, limitar seu tamanho e salvá-los em uma pasta local.

## 🎯 Objetivo
Aprender a implementar upload de arquivos no back-end, utilizando interceptors, armazenamento em disco, validação de arquivos e geração de nomes únicos.

## 🛠️ Tecnologias utilizadas
- **Node.js** — ambiente de execução JavaScript.
- **NestJS** — framework para desenvolvimento back-end.
- **Multer** — gerenciamento de uploads de arquivos.
- **UUID** — geração de identificadores únicos para os arquivos.

## 📂 Estrutura dos arquivos

```text
src/
└── imagem/
    ├── imagem.module.ts
    └── imagem.controller.ts

uploads/
```

A pasta `uploads` é utilizada para armazenar as imagens enviadas.

## 💻 Código utilizado

### 1. ImagemModule — `imagem.module.ts`

```typescript
import { Module } from "@nestjs/common";
import { ImagemController } from "./imagem.controller.js";

@Module({
    controllers: [ImagemController],
})
export class ImagemModule {}
```

### 2. ImagemController — `imagem.controller.ts`

```typescript
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";
import { extname } from "path";

@Controller('imagem')
export class ImagemController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;
          callback(null, nomeArquivo);
        }
      }),
      limits: {
        fileSize: 5 * 1024 * 1024
      },
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(
            new BadRequestException(
              'Apenas arquivos jpg, jpeg, png, gif são permitidos.'
            ),
            false
          );
        }
        callback(null, true);
      }
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }

    return {
      filename: file.filename,
      size: file.size,
      url: `http://localhost:3000/uploads/${file.filename}`
    };
  }
}
```

## 📖 Explicação do código

- `@Module()`: registra o controller responsável pelas rotas de imagem.
- `@Controller('imagem')`: define o prefixo `/imagem`.
- `@Post('upload')`: cria a rota POST `/imagem/upload`.
- `FileInterceptor('file')`: recebe o arquivo enviado no campo `file` da requisição.
- `diskStorage()`: configura o armazenamento dos arquivos no disco.
- `destination: './uploads'`: define a pasta de destino.
- `uuidv4()`: gera um nome único para cada arquivo, reduzindo conflitos de nomes.
- `extname()`: mantém a extensão original do arquivo.
- `fileSize: 5 * 1024 * 1024`: limita o tamanho a 5 MB.
- `fileFilter()`: permite somente arquivos com extensões JPG, JPEG, PNG ou GIF.
- `@UploadedFile()`: disponibiliza o arquivo recebido no método.
- `BadRequestException`: retorna um erro HTTP 400 quando a requisição é inválida.

## ▶️ Como executar

**1.** Instale as dependências necessárias na pasta do projeto:

```
