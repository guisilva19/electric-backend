import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
