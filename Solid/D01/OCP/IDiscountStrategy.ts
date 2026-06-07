import { Order } from "../main";

export interface IDiscountStrategy {
  getDiscount(order: Order): number;
}
