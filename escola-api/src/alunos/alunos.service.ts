import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { Aluno, alunoDoc } from "./schemas/aluno.schemas.js";

@Injectable()
export class alunosService{
    constructor( @InjectModel(Aluno.name) private alunoModel: Model<alunoDoc> ) {}

    //!CRUD
    //!C-CREATE (CRIAR)
    //!R-READ (LER/CONSULTAR)
    //!U-UPDATE (ATUALIZAR)
    //!D-DELETE (APAGAR)

async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const novoAluno = new this.alunoModel(createAlunoDto);
    return novoAluno.save();
}
    
 async findALL(): Promise <Aluno[]>{
        return this.alunoModel.find().exec();
    }

    async findOne(id : string): Promise<Aluno>{
        const aluno = await this.alunoModel.findById(id).exec();

        if(!aluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
        }
        return aluno;
    }
    async update (id: string, updateAlunoDto : UpdateAlunoDto): Promise<Aluno>{
        const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, updateAlunoDto, {
            new: true }).exec();

            if(!alunoAtualizado){
                throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
            }
            return alunoAtualizado;
    }
    async remove (id : string): Promise<Aluno>{
        const alunoRemovido = await this.alunoModel.findByIdAndDelete(id).exec();
        if(!alunoRemovido){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
        }
        return alunoRemovido;
    }
}