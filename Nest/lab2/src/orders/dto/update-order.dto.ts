/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsEnum, IsOptional, IsPositive } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiPropertyOptional({ description: 'The order amount'})
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount?: number;

  @ApiPropertyOptional({ description: 'The longitude coordinates'})
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ description: 'The latitude coordinates' })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ description: 'The client owner ID' })
  @IsOptional()
  @IsNumber()
  clientId?: number;

  @ApiPropertyOptional({ enum: PaymentMethod, description: 'The payment method type' })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;
}
