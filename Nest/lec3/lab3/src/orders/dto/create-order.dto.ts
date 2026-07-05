import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsEnum, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'The longitude coordinates', example: 23.21 })
  @IsNumber()
  longitude: number;

  @ApiProperty({ description: 'The latitude coordinates', example: 31.01 })
  @IsNumber()
  latitude: number;

  @ApiProperty({ enum: PaymentMethod, description: 'The payment method type', example: PaymentMethod.VISA })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ description: 'The list of product IDs included in this order', example: ['uuid-1', 'uuid-2'] })
  @IsArray()
  @IsString({ each: true })
  productIds: string[];
}
