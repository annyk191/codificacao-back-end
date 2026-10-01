import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getPubic(){
    return {
      mensagem:'Rota Publica acessada com sucesso!',
      data: new Date(),
    }
  }

  @Get('admin')
  getPrivate(){
    return {
      mensagem: 'Bem-vido ao Painel Administrativo',
      data: new Date(),
    }
  }
  }
