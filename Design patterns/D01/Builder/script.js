class Pizza {
  constructor() {
    this.size = null;
    this.crust = null;
    this.toppings = [];
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.size = size;
    return this;
  }

  setCrust(crust) {
    this.pizza.crust = crust;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}


const pizza = new PizzaBuilder()
  .setSize("large")
  .setCrust("stuffed")
  .addTopping("ay 7aga")
  .addTopping("ay 7aga 2")
  .build();

console.log(pizza);
