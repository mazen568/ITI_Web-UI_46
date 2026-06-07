import { Order } from "../main";
import { IOrderReportService } from "../DIP/IOrderReportService";

export class OrderReportService implements IOrderReportService {

  generateReport(orders: Order[]): string {

    const revenue =
      orders.reduce(
        (sum, order) => sum + order.totalAmount,
        0
      );

    return `Orders: ${orders.length} | Revenue: $${revenue}`;
  }

  exportToCsv(orders: Order[]): string {

    return orders
      .map(order =>
        `${order.id},${order.customerEmail},${order.totalAmount}`
      )
      .join("\n");
  }
}