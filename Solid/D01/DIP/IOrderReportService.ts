import { Order } from "../main";

export interface IOrderReportService {
  generateReport(orders: Order[]): string;
  exportToCsv(orders: Order[]): string;
}
