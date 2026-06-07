import { Order } from "../main";

export interface IOrderStorage {
  save(order: Order): void;
}
