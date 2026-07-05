import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({ description: 'The unique username', example: 'mazen123' })
  @IsString()
  @MinLength(4)
  username: string;

  @ApiProperty({ description: 'The unique email address', example: 'mazen@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The secure password', example: 'Mazen_Pass123' })
  @IsString()
  @MinLength(6)
  password: string;
}
