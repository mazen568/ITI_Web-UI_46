import { OrderValidator } from "./SRP/OrderValidator";
import { OrderReportService } from "./SRP/OrderReportService";
import { OrderStorage } from "./SRP/OrderStorage";
import { OrderEmailSender } from "./SRP/OrderEmailSender";
import { IDiscountStrategy } from "./OCP/IDiscountStrategy";
import { StandardDiscountStrategy } from "./OCP/StandardDiscountStrategy";
import { PremiumDiscountStrategy } from "./OCP/PremiumDiscountStrategy";
import { BulkDiscountStrategy } from "./OCP/BulkDiscountStrategy";
import { IOrderReader } from "./LSP/IOrderReader";
import { IOrderWriter } from "./LSP/IOrderWriter";
import { IOrderProcessor } from "./ISP/IOrderProcessor";
import { IOrderNotifier } from "./ISP/IOrderNotifier";
import { IOrderReporter } from "./ISP/IOrderReporter";
import { IOrderStorage } from "./DIP/IOrderStorage";
import { IOrderEmailSender } from "./DIP/IOrderEmailSender";
import { IOrderValidator } from "./DIP/IOrderValidator";
import { IOrderLogger } from "./DIP/IOrderLogger";
import { IOrderReportService } from "./DIP/IOrderReportService";


export class Order {
  id: string = crypto.randomUUID();
  customerEmail: string;
  orderType: string; // "Standard", "Premium", "Bulk"
  totalAmount: number;
  items: OrderItem[] = [];

  constructor(
    customerEmail: string,
    orderType: string,
    totalAmount: number,
    items: OrderItem[] = []
  ) {
    this.customerEmail = customerEmail;
    this.orderType = orderType;
    this.totalAmount = totalAmount;
    this.items = items;
  }
}

class OrderItem {
  productName: string;
  quantity: number;
  unitPrice: number;

  constructor(
    productName: string,
    quantity: number,
    unitPrice: number
  ) {
    this.productName = productName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}

// ── [VIOLATION 1: ISP]
// One fat interface forces ALL methods on every implementor

// interface IOrderService {
//   // processing concern
//   processOrder(order: Order): void;

//   // notification concern
//   sendConfirmationEmail(order: Order): void;

//   // reporting concern
//   generateReport(orders: Order[]): string;

//   // export concern
//   exportToCsv(orders: Order[]): string;
// }

// ── [VIOLATION 2: SRP + DIP]
// God class with many responsibilities

class OrderProcessor implements IOrderProcessor, IOrderNotifier, IOrderReporter {

  constructor(
    private storage: IOrderStorage,
    private emailer: IOrderEmailSender,
    private logger: IOrderLogger,
    private validator: IOrderValidator,
    private reportService: IOrderReportService,
    private discountStrategy: IDiscountStrategy
  ) { }

  processOrder(order: Order): void {

    this.logger.log(`Processing order ${order.id}`);

    // SRP
    if (!this.validator.validate(order)) {
      this.logger.log("Invalid order.");
      return;
    }

    // OCP: bdl if/else chain 3mlna interface w class by implemento el interface 3shan mt3mlsh modify, t3ml extension bs
    const discount = this.discountStrategy.getDiscount(order);

    const finalAmount =
      order.totalAmount -
      (order.totalAmount * discount);

    console.log("Final Amount:", finalAmount);

    // SRP
    this.storage.save(order);

    // Responsibility: Notify
    this.sendConfirmationEmail(order);
  }

  sendConfirmationEmail(order: Order): void {
    // SRP
    this.emailer.send(order);
  }

  generateReport(orders: Order[]): string {
    // SRP
    return this.reportService.generateReport(orders);
  }

  exportToCsv(orders: Order[]): string {
    // SRP
    return this.reportService.exportToCsv(orders);
  }
}


//LSP
class SqlOrderStorage implements IOrderWriter, IOrderReader {

  save(order: Order): void {
    console.log(`[SQL] Saved ${order.id}`);
  }

  getAll(): Order[] {
    return [];
  }
}

class ArchiveOrderStorage implements IOrderReader {

  // de ghlt 3shan el parent bta3o (sqlstorage msh byrmy exception sa3t el save)
  // save(order: Order): void {

  //   throw new Error(
  //     "Read-only archive — Save() not supported."
  //   );
  // }

  getAll(): Order[] {
    return [];
  }
}



class SmtpEmailSender implements IOrderEmailSender {
  send(order: Order): void {
    console.log(`[SMTP] Sending to ${order.customerEmail}`);
  }
}

class FileOrderLogger implements IOrderLogger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}



export function setup() {
  const logger = new FileOrderLogger();
  const validator = new OrderValidator(); 
  const storage = new OrderStorage(); 
  const emailer = new SmtpEmailSender(); 
  const reportService = new OrderReportService(); 
  const discountStrategy = new BulkDiscountStrategy(); 

  const processor = new OrderProcessor(
    storage,
    emailer,
    logger,
    validator,
    reportService,
    discountStrategy
  );

  return processor;
}
