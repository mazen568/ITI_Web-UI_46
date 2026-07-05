import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { orders } from './data';
import { GetOrdersFilterDto } from './dto/get-orders-filter-dto';
import { NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto): Order {
    const newOrder = {
      id: uuid(),
      ...createOrderDto,
    };

    orders.push(newOrder);

    return newOrder;
  }

  findAll(filterDto: GetOrdersFilterDto): Order[] {
    let result = orders;

    const { clientId, paymentMethod } = filterDto;

    if (clientId) {
      result = result.filter((order) => order.clientId === Number(clientId));
    }

    if (paymentMethod) {
      result = result.filter((order) => order.paymentMethod === paymentMethod);
    }

    return result;
  }

  findOne(id: string): Order {
    const order = orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`); //404
    }

    return order;
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Order {
    const orderIndex = orders.findIndex((order) => order.id === id);

    const updatedOrder = {
      ...orders[orderIndex],
      ...updateOrderDto,
    };

    orders[orderIndex] = updatedOrder;

    return updatedOrder;
  }

  remove(id: string): void {
    const orderIndex = orders.findIndex((order) => order.id === id);

    if (orderIndex === -1) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    orders.splice(orderIndex, 1);
  }
}
