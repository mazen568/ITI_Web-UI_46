import { Chair, Table, FurnitureFactory } from "./AbstractFurniture.js";

class ModernChair extends Chair {
    sit(){
        console.log("modern chair");
    }
}

class ModernTable extends Table {
    placeItems() {
        console.log("modern table");
    }
}


export class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair();
    }

    createTable() {
        return new ModernTable();
    }
}