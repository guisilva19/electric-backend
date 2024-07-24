import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  senha: string;
}
