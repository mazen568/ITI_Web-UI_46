import { Order } from "../main";

export interface IOrderReporter {
  generateReport(orders: Order[]): string;
  exportToCsv(orders: Order[]): string;
}