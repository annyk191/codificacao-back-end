import { Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete} from "@nestjs/common";
import { alunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";

@Controller('alunos')
export class alunosController{
    constructor(private readonly AlunosServise:alunosService){}

    @Post()
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.AlunosServise.create(createAlunoDto);
    }

    @Get()
    findAll(){
        return this.AlunosServise.findALL();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.AlunosServise.findOne(id);
    }

    @Patch(':id')
    update(@Param('id')id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.AlunosServise.update(id,updateAlunoDto);
    }

    @Delete(':id')
    remove(@Param('id')id: string){
        return this.AlunosServise.remove(id);
    }
}