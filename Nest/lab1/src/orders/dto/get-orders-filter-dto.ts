import { PaymentMethod } from '../entities/order.entity';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetOrdersFilterDto {
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @IsOptional()
  @IsString()
  clientId?: string;
}
