import { Order } from "../main";

export interface IOrderEmailSender {
  send(order: Order): void;
}
