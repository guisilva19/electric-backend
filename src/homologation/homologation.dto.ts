import { ApiProperty } from '@nestjs/swagger';

export class HomologationDTO {
  @ApiProperty({
    example: 'string',
  })
  nome: string;
}

// "nome":"Guilherme Silva Fernandes",
// "cabo_do_padrao":"10",
// "disjuntor_do_padrao":"63",
// "distancia_entre_inversor_e_distribuicao":"12",
// "email":"2003silvagui@gmail.com",
// "modelo_do_inversor_inserido":"1",
// "modelo_do_modulo_inserido":"1",
// "numero_conta_contrato":"12345678",
// "quantidade_inversores_inseridos":"1",
// "quantidade_medidores":"1",
// "quantidade_modulos_inseridos":"1",
// "telefone":"7799664132",
// "tensao_de_fornecimento":"127/220",
// "tipo_de_ligacao":"MONOFÁSICA",
// "transformador":false,
// "ampliacao":false,
