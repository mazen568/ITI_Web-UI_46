import { ModernFurnitureFactory } from "./ModernFamily.js";
import { VictorianFurnitureFactory } from "./VictorianFamily.js";


const factory = new ModernFurnitureFactory();

const chair = factory.createChair();
const table = factory.createTable();

chair.sit();
table.placeItems();
