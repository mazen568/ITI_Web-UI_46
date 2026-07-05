import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter-dto';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: OrdersRepository) {}

  create(dto: CreateOrderDto) {
    return this.ordersRepo.createOrder(dto);
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
    const updated = Object.assign(order, dto);
    return this.ordersRepo.save(updated);
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    return this.ordersRepo.remove(order);
  }
}
