import { Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    DefaultValuePipe,
    ParseIntPipe} from "@nestjs/common";
import { alunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, ApiResponse,ApiOperation, ApiQuery } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')
export class alunosController{
    constructor(private readonly AlunosServise:alunosService){}

    @Post()
    @ApiOperation({
        summary: 'criar a matricula do aluno',
    })
    @ApiResponse({
        status:201,
        description:'aluno criado com sucesso',
    })
    @ApiResponse({
        status:400,
        description:'requisição inválida ou dados de entrada incorretos/mal formatado',
    })
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.AlunosServise.create(createAlunoDto);
    }

    // @Get()
    // @ApiOperation({
    //     summary:'listar todos os alunos'
    // })
    // @ApiResponse({
    //     status:201,
    //     description:'lista de alunos retornada com sucesso ',
    // })
    // @ApiResponse({
    //      status:400,
    //      description:'nenhum aluno encontrado',
    // })
    // findAll(){
    //     return this.AlunosServise.findALL();
    // }

    @Get()
    @ApiOperation({
        summary: 'listar alunos com paginação, filtros opcionais e ordenação'
    })
    @ApiResponse({
        status:200,
        description:'lista de alunos retornada com sucesso'
    })
    @ApiResponse({
        status:400,
        description:'nenhum aluno encontrado'
    })
    @ApiResponse({
        status:500,
        description:'erro interno no servidor'
    })
    @ApiQuery({
        name:'page',
        required:false,
        type:Number,
        description:'numeros de paginas (padrão: 1)',
    })
    @ApiQuery({
        name:'limit',
        required:false,
        type:Number,
        description:'numeros de itens por paginas (padrão: 10)',
    })
    @ApiQuery({
        name: 'nome',
        required:false,
        type: String,
        description:'filtrar alunos pelo nome (Ex: jamilly)',
    })
     @ApiQuery({
        name: 'curso',
        required:false,
        type: String,
        description:'filtrar alunos pelo curso (Ex: Engenharia cívil)',
    })
     @ApiQuery({
        name: 'orderBy',
        required:false,
        type: String,
        description:'campos (EX:nome, idade, matricula e curso)',
    })
     @ApiQuery({
        name: 'orderDirection',
        required:false,
        enum: [
            'asc',
            'desc',
        ],
        description:'(asc) para crescente e (desc) para decrescente',
    })

    findPagefilter(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('nome') nome?:string,
        @Query('curso')curso?:string,
        @Query('orderBy')orderbY?:string,
        @Query('orderDirection')orderDirection?: 'asc' | 'desc',
    ){
        return this.AlunosServise.findpagefilter(
            page,
            limit,
            nome,
            curso,
            orderbY,
            orderDirection
        );
    }

    @Get(':id')
    @ApiOperation({
        summary:'obter detalhes de um aluno especifico',
    })
    @ApiResponse({
         status:200,
        description:'detalhes do aluno retornados com sucesso',
    })
    @ApiResponse({
        status:404,
        description:'aluno não encontrado',
    })
    findOne(@Param('id') id: string){
        return this.AlunosServise.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
        summary:'atualizar informações de um aluno especifico',
    })
    @ApiResponse({
        status:200,
        description:'informações do aluno atualizadas com sucesso',
    })
    @ApiResponse({
        status:404,
        description:'aluno não encontrado',
    })
    update(@Param('id')id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.AlunosServise.update(id,updateAlunoDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary:'remover um aluno especifico',
    })
    @ApiResponse({
        status:200,
        description:'aluno removido com sucesso',
    })
    @ApiResponse({
        status:404,
        description:'aluno não encontrado',
    })
    remove(@Param('id')id: string){
        return this.AlunosServise.remove(id);
    }
}
