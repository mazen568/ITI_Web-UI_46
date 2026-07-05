import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier of the product (UUID)' })
  id: string;

  @Column()
  @ApiProperty({ description: 'The name of the product' })
  name: string;

  @Column('float')
  @ApiProperty({ description: 'The price of the product' })
  price: number;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
