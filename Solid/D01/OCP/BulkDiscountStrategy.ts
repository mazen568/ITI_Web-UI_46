import { Order } from "../main";
import { IDiscountStrategy } from "./IDiscountStrategy";

export class BulkDiscountStrategy implements IDiscountStrategy {
  getDiscount(order: Order): number {
    return 0.20;
  }
}
