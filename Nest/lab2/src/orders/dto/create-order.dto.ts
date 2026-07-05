/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'The order amount', example: 1230.5 })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'The longitude coordinates', example: 23.21 })
  @IsNumber()
  longitude: number;

  @ApiProperty({ description: 'The latitude coordinates', example: 31.01 })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'The client owner ID', example: 1 })
  @IsNumber()
  clientId: number;

  @ApiProperty({ enum: PaymentMethod, description: 'The payment method type', example: PaymentMethod.VISA })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
