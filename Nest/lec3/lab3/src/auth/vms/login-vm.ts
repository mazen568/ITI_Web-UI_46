import { ApiProperty } from '@nestjs/swagger';

export class LoginVM {
  @ApiProperty({ description: 'JWT Bearer Access Token' })
  accessToken: string;
}
