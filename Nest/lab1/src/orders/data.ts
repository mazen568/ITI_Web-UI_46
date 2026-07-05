import { v4 as uuid } from 'uuid';
import { Order, PaymentMethod } from './entities/order.entity';

export const orders: Order[] = [
  {
    id: uuid(),
    amount: 1230.5,
    longitude: 23.21,
    latitude: 31.01,
    clientId: 1,
    paymentMethod: PaymentMethod.VISA,
  },
  {
    id: uuid(),
    amount: 750,
    longitude: 29.95,
    latitude: 30.04,
    clientId: 2,
    paymentMethod: PaymentMethod.CASH,
  },
  {
    id: uuid(),
    amount: 500,
    longitude: 24.5,
    latitude: 30.5,
    clientId: 1,
    paymentMethod: PaymentMethod.CASH,
  },
];
