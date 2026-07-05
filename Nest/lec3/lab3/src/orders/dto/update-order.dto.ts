import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsEnum, IsOptional, IsPositive, IsString, IsArray } from 'class-validator';
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
  @IsString()
  clientId?: string;

  @ApiPropertyOptional({ enum: PaymentMethod, description: 'The payment method type' })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @ApiPropertyOptional({ description: 'The list of product IDs included in this order' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  productIds?: string[];
}
