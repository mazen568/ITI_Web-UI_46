import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { GetOrdersFilterDto } from './dto/get-orders-filter-dto';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
  ) {}

  createOrder(data: Partial<Order>) {
    const order = this.repo.create(data);
    return this.repo.save(order);
  }

  findAll(filterDto: GetOrdersFilterDto) {
    const { clientId, paymentMethod } = filterDto;

    const query = this.repo.createQueryBuilder('order');

    if (clientId) {
      query.andWhere('order.clientId = :clientId', {
        clientId: Number(clientId),
      });
    }

    if (paymentMethod) {
      query.andWhere('order.paymentMethod = :paymentMethod', {
        paymentMethod,
      });
    }

    return query.getMany();
  }

  findById(id: string) {
    return this.repo.findOneBy({ id });
  }

  save(order: Order) {
    return this.repo.save(order);
  }

  remove(order: Order) {
    return this.repo.remove(order);
  }
}
