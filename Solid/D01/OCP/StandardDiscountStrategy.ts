import { Order } from "../main";
import { IDiscountStrategy } from "./IDiscountStrategy";

export class StandardDiscountStrategy implements IDiscountStrategy {
  getDiscount(order: Order): number {
    return 0.00;
  }
}
