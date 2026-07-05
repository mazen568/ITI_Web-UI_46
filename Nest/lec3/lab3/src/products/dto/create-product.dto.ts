import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'The product name', example: 'Samsung S24 Ultra' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The product price', example: 1200 })
  @IsNumber()
  price: number;
}
