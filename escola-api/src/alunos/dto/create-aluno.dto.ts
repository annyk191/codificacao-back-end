import { isString,
         IsNotEmpty,
         IsInt,
         Min,
         IsArray,
         ArrayMinSize, 
         IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateAlunoDto {

  @ApiProperty({
    example: 'matheus silva',
    description: 'nome do aluno'
  })
  @IsString()
  @IsNotEmpty({
    message:'O nome é obrigatório e não pode estar vazio'
  })
  nome: string;

   @ApiProperty({
    example:'30',
    description: 'idade do aluno'
    
  })
  @IsInt({
    message:'A idade deve ser um numero inteiro'
  })
  @Min(0,{
    message:'A idade não pode ser negativa.'
  })
  idade: number;

  @ApiProperty({
    example:'9999',
    description:'matricula do aluno'
  })
  @IsString()
  @IsNotEmpty({
    message:'A Matrícula é Obrigatória'
  })
  matricula: string;

   @ApiProperty({
    example:['ciências da computação', 'letras portugues'],
    description:'cursos que o aluno esta matriculado'
  })
  @IsString({each: true, message:'Cada curso deve ser um texto'})
  @IsArray()
  @ArrayMinSize(1,{
    message:'O aluno deve estar matriculado em pelo menos um curso'
  })
  curso: string[];
}