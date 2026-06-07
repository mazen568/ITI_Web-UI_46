import { Order } from "../main";
import { IOrderValidator } from "../DIP/IOrderValidator";

export class OrderValidator implements IOrderValidator {

  validate(order: Order): boolean {

    if (order.items.length === 0) {
      return false;
    }

    if (!order.customerEmail.trim()) {
      return false;
    }

    return true;
  }
}