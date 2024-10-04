import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrcamentoDTO {
  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  local: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  endereco: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNotEmpty()
  valor_da_conta_de_luz: string;
}
