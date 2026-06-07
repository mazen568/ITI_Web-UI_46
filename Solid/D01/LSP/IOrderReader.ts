import { Order } from "../main";

export interface IOrderReader {
  getAll(): Order[];
}