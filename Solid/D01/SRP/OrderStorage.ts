import { Order } from "../main";
import { IOrderStorage } from "../DIP/IOrderStorage";

export class OrderStorage implements IOrderStorage {
  save(order: Order): void {
    console.log(`[SQL] Saved ${order.id}`);
  }
}