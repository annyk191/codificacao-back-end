import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { alunosController } from "./alunos.controller.js";
import { alunosService } from "./alunos.service.js";
import { Aluno, Alunoschema} from "./schemas/aluno.schemas.js"

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Aluno.name, schema:Alunoschema
        }])
    ],
    controllers:[alunosController],
    providers:[alunosService],
})
export class AlunosModule {}