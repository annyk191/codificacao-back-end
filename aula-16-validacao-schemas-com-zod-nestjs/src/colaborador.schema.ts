import {email, z} from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string() 
    .min(3, {message:'o nome deve ter no minimo 3 letras'}),
    email: z.email({message:'o email deve ser valido'}),
    idade: z.number({message:'a idade  deve ser um numéro valido'})
    .min(18, {message:'a idade minima é 18 anos!'})
    .max(65, {message:'a idade maxima é 65 anos!'}),
    departamento: z.enum(['TI', 'RH', 'COMERCIAL', 'FINANCEIRO'],{
        error: () => ({message: 'departamento deves ser obrigatoriamente TI, RH,'})    
    }),
});
export type colaborador =z.infer< typeof colaboradorSchema>