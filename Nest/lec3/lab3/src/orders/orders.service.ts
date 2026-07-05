import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepo: OrdersRepository,
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  async create(dto: CreateOrderDto, client: User) {
    const { longitude, latitude, paymentMethod, productIds } = dto;

    const products = await this.productsRepo.findBy({
      id: In(productIds),
    });

    if (products.length === 0) {
      throw new NotFoundException('No valid products found for the provided IDs');
    }

    const amount = products.reduce((sum, product) => sum + product.price, 0);

    return this.ordersRepo.createOrder({
      amount,
      longitude,
      latitude,
      paymentMethod,
      client,
      products,
    });
  }

  findAll(filterDto: GetOrdersFilterDto) {
    return this.ordersRepo.findAll(filterDto);
  }

  async findOne(id: string) {
    const order = await this.ordersRepo.findById(id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return order;
  }

  async update(id: string, dto: UpdateOrderDto) {
    const order = await this.findOne(id);
    
    if (dto.productIds) {
      const products = await this.productsRepo.findBy({
        id: In(dto.productIds),
      });
      if (products.length > 0) {
        order.products = products;
        order.amount = products.reduce((sum, p) => sum + p.price, 0);
      }
    }

    const { productIds, ...otherFields } = dto;
    const updated = Object.assign(order, otherFields);
    return this.ordersRepo.save(updated);
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    return this.ordersRepo.remove(order);
  }
}
