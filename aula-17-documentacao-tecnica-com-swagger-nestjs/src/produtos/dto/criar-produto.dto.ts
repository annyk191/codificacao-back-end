import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {

    //!nome do produto
    @ApiProperty({
        example:'café grão de ouro 500g',
        description:'nome comercial do produto cadastrado.',
    })
    nome:string;

    //!preco do produto
    @ApiProperty({
        example:9.99,
        description:'preço unitario do produto',
    })
    preco:Number;

    //! genero do produto
    @ApiProperty({
        example:'alimentos',
        description:'categoria do produto',
    })
    categoria:string;

}