import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { jogosService } from "./jogos.service.js";


@Controller('jogos')
export class jogosController {
    constructor(private readonly jogosService: jogosService){}

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: string){
        const numId = +id;
        return this.jogosService.buscarPorId(numId);
    }
}