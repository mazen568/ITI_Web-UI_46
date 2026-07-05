import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'The username', example: 'mazen123' })
  @IsString()
  @MinLength(4)
  username: string;

  @ApiProperty({ description: 'The password', example: 'Mazen_Pass123' })
  @IsString()
  @MinLength(6)
  password: string;
}
