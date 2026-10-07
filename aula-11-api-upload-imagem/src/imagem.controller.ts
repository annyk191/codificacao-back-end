import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
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