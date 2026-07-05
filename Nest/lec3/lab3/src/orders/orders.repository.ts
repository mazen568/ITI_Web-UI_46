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
    const query = this.repo.createQueryBuilder('order')
      .leftJoinAndSelect('order.client', 'client')
      .leftJoinAndSelect('order.products', 'products');

    if (clientId) {
      query.andWhere('client.id = :clientId', { clientId });
    }

    if (paymentMethod) {
      query.andWhere('order.paymentMethod = :paymentMethod', {
        paymentMethod,
      });
    }

    return query.getMany();
  }

  findById(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: {
        client: true,
        products: true,
      },
    });
  }

  save(order: Order) {
    return this.repo.save(order);
  }

  remove(order: Order) {
    return this.repo.remove(order);
  }
}
