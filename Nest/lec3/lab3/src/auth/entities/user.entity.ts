import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier of the user (UUID)' })
  id: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'The unique username of the user' })
  username: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'The unique email of the user' })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}
