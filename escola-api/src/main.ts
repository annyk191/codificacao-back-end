import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuração Swagger
  const config = new DocumentBuilder()
    .setTitle('API escola')
    .setDescription('API para gerenciamento de alunos')
    .setVersion('1.0')
    .addTag('alunos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const porta = process.env.PORT ?? 3000;

  await app.listen(porta);

  logger.log(`Servidor rodando na porta ${porta}`);
}

await bootstrap();
