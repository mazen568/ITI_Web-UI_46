class Counter {
    constructor() {
      if (Counter.instance) {
        return Counter.instance;
      }
  
      this.count = 0;
      Counter.instance = this;
    }
  
    increment() {
      this.count++;
    }
  
  }
  
  class User {
    constructor(name) {
      this.name = name;
      const c = new Counter();
      c.increment();
    }
  }
  
  const u1 = new User("mazen");
  const u2 = new User("raafat");
  
  const counter = new Counter();
 console.log(counter.count);
