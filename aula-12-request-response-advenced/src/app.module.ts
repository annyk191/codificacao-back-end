import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { segurancaController } from './seguranca.controller.js';

@Module({
  imports: [],
  controllers: [AppController, segurancaController],
  providers: [AppService],
})
export class AppModule {}
