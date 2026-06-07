import { Order } from "../main";

export interface IOrderValidator {
  validate(order: Order): boolean;
}
