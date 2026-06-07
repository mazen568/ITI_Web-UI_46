import { Order } from "../main";
import { IDiscountStrategy } from "./IDiscountStrategy";

export class PremiumDiscountStrategy implements IDiscountStrategy {
  getDiscount(order: Order): number {
    return 0.10;
  }
}
