function Book(title,numOfChapters,author,numOfPages,publisher,numOfCopies) {
    this.title = title;
    this.numOfChapters = numOfChapters;
    this.author = author;
    this.numOfPages = numOfPages;
    this.publisher = publisher;
    this.numOfCopies = numOfCopies;
  }
  
  function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];
    this.numOfBooks = 0;
    this.volume = height * width * length;
  

    this.addBook = function (book) {
      for (var i = 0; i < this.content.length; i++) {
        if (this.content[i].title === book.title) {
          this.content[i].numOfCopies += book.numOfCopies;
          this.numOfBooks += book.numOfCopies;
          return;
        }
      }
  
      this.content.push(book);
      this.numOfBooks += book.numOfCopies;
    };
  
    this.removeBook = function (title) {
      for (var i = 0; i < this.content.length; i++) {
        if (this.content[i].title === title) {
          if (this.content[i].numOfCopies === 0)
            throw new Error("no copies");
  
          this.content[i].numOfCopies--;
          this.numOfBooks--;
  
          if (this.content[i].numOfCopies === 0) 
            this.content.splice(i, 1);
          return;
        }
      }
  
      throw new Error("book not found");
    };


    this.displayBooks = function(){
        console.log(this.content);
    }



  }
  
  var box = new Box(12, 18, 25, "plastic");

  var b1 = new Book("b1", 12, "mazen", 220, "ahmed", 4);
  var b2 = new Book("b2", 9, "hassan", 310, "mohamed", 1);
  var b3 = new Book("b1", 12, "youssef", 220, "mahmoud", 3);
  
  box.addBook(b1);
  box.addBook(b2);
  box.addBook(b3);
  
  console.log("no of books:", box.numOfBooks);
  box.displayBooks();
  
  box.removeBook("b1");
  console.log("no of books after delete:", box.numOfBooks);
  box.displayBooks();
  
  box.removeBook("b1");
  box.removeBook("b1");
  box.removeBook("b1");
  box.removeBook("b1");
  box.removeBook("b1");
  box.removeBook("b1");
  box.removeBook("b2");
  console.log("no of books after removing all books:", box.numOfBooks);
  box.displayBooks();
  