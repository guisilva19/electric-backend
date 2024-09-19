import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class HomologationDTO {
  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  numero_conta_contrato: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  distancia_entre_inversor_e_distribuicao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  tipo_de_ligacao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  tensao_de_fornecimento: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  disjuntor_do_padrao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  cabo_do_padrao: string;

  @ApiProperty({
    example: false,
  })
  @IsBoolean()
  ampliacao: boolean;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  carga_instalada: string;

  @ApiProperty({
    example: 1,
  })
  total_de_inversores: number;

  @ApiProperty({
    example: 1,
  })
  total_de_modulos: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  modelo_do_inversor_inserido: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  modelo_do_modulo_inserido: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  quantidade_modulos_inseridos: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  quantidade_inversores_inseridos: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  modelo_do_inversor_homologado: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  modelo_do_modulo_homologado: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  quantidade_modulos_homologados: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  quantidade_inversores_homologados: string;

  ////

  @ApiProperty({
    example: false,
  })
  outras_conta_recebera_credito: boolean;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  numero_conta_contrato_02: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  media_consumo_conta_02: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  numero_conta_contrato_03: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  media_consumo_conta_03: string;
}
