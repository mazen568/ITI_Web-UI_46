/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PaymentMethod } from '../entities/order.entity';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetOrdersFilterDto {
  @ApiPropertyOptional({ enum: PaymentMethod, description: 'Filter by payment method type', example: PaymentMethod.CASH })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @ApiPropertyOptional({ description: 'Filter by client owner ID', example: '1' })
  @IsOptional()
  @IsString()
  clientId?: string;
}
