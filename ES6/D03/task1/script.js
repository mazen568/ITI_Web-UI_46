class Shape {
    constructor(d1, d2) {
      if (this.constructor === Shape) {
        throw new Error("shape is an abstract class");
      }
      this.dim1 = d1;
      this.dim2 = d2;
    }
  
    area(){
      return 0;
    } ;
  
    toString() {
      return "this is shape class";
    }
  }

class Rectangle extends Shape {

    constructor(width, height) {
        super(width, height);
    }
    area() {
        return this.dim1 * this.dim2;
        }
   
    toString() {
    return `rectangle:width = ${this.dim1} height = ${this.dim2} area = ${this.area()}`;
    }

    draw(ctx, x, y) {
      ctx.beginPath();
      ctx.rect(x, y, this.dim1, this.dim2);
      ctx.stroke();
    }
}


class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    toString() {
        return `square:side = ${this.dim1} area = ${this.area()}`;
        }
 }


class Circle {
  constructor(radius) {
      this.radius=radius;
    }

    area() {
    return Math.PI * this.radius * this.radius;
    }

    toString() {
    return `circle:radius = ${this.radius} area = ${this.area()}`;
    }
    draw(ctx, x, y) {
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
}


class Triangle extends Shape {
    constructor(base, height) {
        super(base, height);
      }
      area() {
        return 0.5 * this.dim1 * this.dim2;
      }
 
      toString() {
        return `triangle:base = ${this.dim1} height = ${this.dim2} area = ${this.area()}`;
      }

      draw(ctx, x, y) {
        ctx.beginPath();             
        ctx.moveTo(x, y);            
        ctx.lineTo(x + this.dim1, y); 
        ctx.lineTo(x, y - this.dim2); 
        ctx.closePath();            
        ctx.stroke();              
    }
    
    }
    
            
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rectangle=new Rectangle(120, 60)
let square=new Square(80)
let circle=new Circle(40)
let triangle=new Triangle(100, 70)


console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());

  
let x = 20;
let y = 100;

rectangle.draw(ctx, x, y);
x += 170; 

square.draw(ctx, x, y);
x += 170;


circle.draw(ctx, x, y);
x += 170;
y+=70;

triangle.draw(ctx, x, y);
x += 170;

    