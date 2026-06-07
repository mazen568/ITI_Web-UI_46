import { Chair, Table, FurnitureFactory } from "./AbstractFurniture.js";

class VictorianChair extends Chair {
    sit() {
        console.log("victorian chair");
    }
}

class VictorianTable extends Table {
    placeItems() {
        console.log("victorian table");
    }
}



export class VictorianFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }

    createTable() {
        return new VictorianTable();
    }
}