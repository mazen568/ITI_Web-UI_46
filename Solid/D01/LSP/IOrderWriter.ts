import { Order } from "../main";

export interface IOrderWriter {
  save(order: Order): void;
}