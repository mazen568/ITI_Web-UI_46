import { Order } from "../main";

export interface IOrderNotifier {
  sendConfirmationEmail(order: Order): void;
}