import { PaymentMethod } from '../entities/order.entity';
import { IsNumber, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;

  @IsNumber()
  clientId: number;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
