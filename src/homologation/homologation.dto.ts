import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class HomologationDTO {
  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  numero_conta_contrato: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  distancia_entre_inversor_e_distribuicao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  tipo_de_ligacao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  tensao_de_fornecimento: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  disjuntor_do_padrao: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  cabo_do_padrao: string;

  @ApiProperty({
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  ampliacao: boolean;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  carga_instalada: string;

  @ApiProperty({
    example: 1,
  })
  @IsString()
  @IsNotEmpty()
  total_de_inversores: number;

  @ApiProperty({
    example: 1,
  })
  @IsString()
  @IsNotEmpty()
  total_de_modulos: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  modelo_do_inversor_inserido: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  modelo_do_modulo_inserido: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  quantidade_modulos_inseridos: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  quantidade_inversores_inseridos: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  modelo_do_inversor_homologado: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  modelo_do_modulo_homologado: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  quantidade_modulos_homologados: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  quantidade_inversores_homologados: string;
}

// numero_conta_contrato                   String?
// distancia_entre_inversor_e_distribuicao String?
// tipo_de_ligacao                         String? MONOFÁSICA | BIFÁSICA | TRIFÁSICA
// tensao_de_fornecimento                  String? 220/380 | 127/220
// disjuntor_do_padrao                     String? 40A | 50A | 63A | 70A | 100A | 125A | OUTRO
// cabo_do_padrao                          String?
// ampliacao                               Boolean?
// carga_instalada                         String?
// total_de_inversores                     Int?
// total_de_modulos                        Int?
// modelo_do_inversor_inserido             String?
// modelo_do_modulo_inserido               String?
// quantidade_modulos_inseridos            String?
// quantidade_inversores_inseridos         String?
// modelo_do_inversor_homologado           String?
// modelo_do_modulo_homologado             String?
// quantidade_modulos_homologados          String?
// quantidade_inversores_homologados       String?

// 
