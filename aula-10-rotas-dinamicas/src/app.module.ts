import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { jogosController } from './jogos.controller.js';
import { jogosService } from './jogos.service.js';

@Module({
  imports: [],
  controllers: [AppController, jogosController],
  providers: [AppService, jogosService],
})
export class AppModule {}
