
function Shape() { 
    if (this.constructor === Shape) 
        throw new Error("shape is abstract class"); 
 }
 
var rectangleCreated=false;
function Rectangle(width, height) {
    if(this.constructor===Rectangle && rectangleCreated){
        throw new Error("can't create more than one rectangle");
    }
    Shape.call(this);
    rectangleCreated=true;

    Object.defineProperties(this, {
        width: {
             value: width, 
             writable: false, 
             enumerable: false, 
             configurable: false 
            },
        height: { 
            value: height, 
            writable: false, 
            enumerable: false, 
            configurable: false 
        }
    });
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() { 
    return this.width * this.height; 
}
Rectangle.prototype.perimeter = function() { 
    return 2 * (this.width + this.height); 
}
Rectangle.prototype.toString = function() {
    return "rectangle: " + this.width + "x" + this.height + ", area: " + this.area() + ", perimeter: " + this.perimeter();
}
Rectangle.prototype.valueOf = function() { 
    return this.area(); 
}


var squareCreated=false;
function Square(side) {
    if(squareCreated){
        throw new Error("can't create more than one square");
    }
    Rectangle.call(this,side,side);
    squareCreated=true;

    Object.defineProperties(this, {
        side: { 
            value: side, 
            writable: false, 
            enumerable: false, 
            configurable: false 
        }
    });
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
    return "square: " + this.width + "x" + this.height + ", area: " + this.area() + ", perimeter: " + this.perimeter();
}
Square.prototype.valueOf = function() { 
    return this.area(); 
}



var r1 = new Rectangle(10, 20);
console.log(r1.toString());

try { 
    var r2 = new Rectangle(5,10); 
} catch(e) { 
    console.log(e.message); 
} 

var s1 = new Square(4);
console.log(s1.toString());

try { 
    var s2 = new Square(6); 
} catch(e) { 
    console.log(e.message); 
} 


console.log("sum of areas: ",r1+s1);

