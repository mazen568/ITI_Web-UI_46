import { Order } from "../main";
import { IOrderEmailSender } from "../DIP/IOrderEmailSender";

export class OrderEmailSender implements IOrderEmailSender {
  send(order: Order): void {
    console.log(`[EMAIL] Sent to ${order.customerEmail}`);
  }
}