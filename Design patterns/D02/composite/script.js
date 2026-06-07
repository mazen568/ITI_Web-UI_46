class Book {
  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }
}

class Box {
  constructor(name) {
    this.name=name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  getPages() {
    return this.items.reduce((sum, item) => {
      return sum + item.getPages();
    }, 0);
  }
}

const book1 = new Book("book1", 200);
const book2 = new Book("book2", 150);
const book3 = new Book("book3", 100);

const box1 = new Box("box1");
box1.add(book1);
box1.add(book2);

const box2 = new Box("box2");
box2.add(book3);
box2.add(box1); 

console.log(box2.getPages()); 
