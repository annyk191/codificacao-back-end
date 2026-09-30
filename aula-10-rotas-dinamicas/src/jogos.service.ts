import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class jogosService{
    private jogos = [
        {id: 1, titulo: 'minecraft', estudio:'Mojang studios'},
        {id: 2, titulo: 'the Legend of Zelda: Ocarina of time', estudio:'Nintendo'},
        {id: 3, titulo: 'Grand theft auto: san Andreas', estudio:'Rockstar'},
        {id: 4, titulo: 'stardew Vallew', estudio:'ConcernedApe'},
        {id: 5, titulo: 'Citampi Stories', estudio:'Ikan Asin Production'},
    ];
    buscarPorId(id:number){
        const jogo = this.jogos.find((j) => j.id === id);
        if(!jogo){
            throw new NotFoundException('Jogo com ID ${id} não localizado em nosso estoque:');
        }
        return jogo;
    }
}
    
