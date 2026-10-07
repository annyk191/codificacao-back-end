import { Controller,Get,Headers, Res } from "@nestjs/common";
import type { Response } from "express";

@Controller('secret')
export class segurancaController {
    @Get()
    acessAreaSecret(@Headers('y-api-key') apikey:string, @Res() res:Response){
        if(apikey === 'FULLSTACK-2026'){
            res.setHeader('y-auth-status', 'verificado');
            return res.status(200).json({
                menssagem:'Acesso concedido a Area secreta!',
                log:new Date(),
            });
        }
        return res.status(403).json({
            erro:'forbidden',
            mensagem:'Chave Api inválida ou ausente',
            log:new Date(),
   
        });
    }
} 