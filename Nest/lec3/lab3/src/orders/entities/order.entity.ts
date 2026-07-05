import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../auth/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

export enum PaymentMethod {
  CASH = 'Cash',
  VISA = 'Visa',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier of the order (UUID)' })
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

  @ManyToOne(() => User, (user) => user.orders, { eager: false, onDelete: 'CASCADE' })
  client: User;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  @ApiProperty({ enum: PaymentMethod, description: 'The payment method' })
  paymentMethod: PaymentMethod;

  @ManyToMany(() => Product, (product) => product.orders, { cascade: true })
  @JoinTable({
    name: 'order_products',
    joinColumn: { name: 'order_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id' },
  })
  products: Product[];
}
