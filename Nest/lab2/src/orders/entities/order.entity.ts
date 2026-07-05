import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum PaymentMethod {
  CASH = 'Cash',
  VISA = 'Visa',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier (UUID) of the order' })
  id: string;

  @Column('float')
  @ApiProperty({ description: 'The order amount' })
  amount: number;

  @Column('float')
  @ApiProperty({ description: 'The longitude of location coordinate' })
  longitude: number;

  @Column('float')
  @ApiProperty({ description: 'The latitude of location coordinate' })
  latitude: number;

  @Column('int')
  @ApiProperty({ description: 'The ID of the client' })
  clientId: number;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  @ApiProperty({ enum: PaymentMethod, description: 'The payment method' })
  paymentMethod: PaymentMethod;
}
