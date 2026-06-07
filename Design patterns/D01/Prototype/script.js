class Document {
    constructor(header, footer, pages, text) {
      this.header = header;
      this.footer = footer;
      this.pages = pages; 
      this.text = text;
    }
  
    clone() {
      return new Document(
        this.header,
        this.footer,
        [...this.pages], 
        this.text
      );
    }
  }

  const doc1 = new Document("mazen 1","footer",["home", "about"],"helloooooo");
  
  const doc2 = doc1.clone();
  
  doc2.title = "mazen 2";
  doc2.pages.push("dashboard");
  
  console.log(doc1.pages); 
  console.log(doc2.pages); 