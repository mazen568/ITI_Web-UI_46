import { Order } from "../main";

export interface IOrderProcessor {
  processOrder(order: Order): void;
}