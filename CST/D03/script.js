//1
// function displayHeadings() {
//     let message = prompt("enter message");

//     for (let i = 1; i <= 6; i++) {
//         document.write("<h" + i + ">" + message + "</h" + i + ">");
//     }
// }

// displayHeadings();

//2
// function  sum(){
        
//     let sum = 0;

//     while (true) {
//         let value = prompt("enter number");
    
//         if (isNaN(value)) {
//             alert("invalid, enter a number");
//             continue;
//         }
    
//         value = parseInt(value);
    
//         if (value === 0 || sum > 100) {
//             alert("sum exceeded 100 or zero");
//             break;
//         }
    
//         sum += value;
//     }
    
//     console.log("sum is:", sum);
    
// }
// sum();

//3
// function ternary(){

//     let x=prompt("enter number 1");
//     let y=prompt("enter number 2");
//     if(isNaN(x) || isNaN(y)){
//         alert("invalid! enter a number");
//         return;
//     }
//     let result =(x>y)?x:y;
//     console.log("max value is:",result)
// }


// ternary();



//4
// function checkNumber(){
//      let x=prompt("enter number 1");
//      let y=prompt("enter number 2");
//      let z=prompt("enter number 3");

     
//     if(isNaN(x) || isNaN(y) || isNaN(z)){
//         alert("invalid! enter a number");
//         return;
//     }
//     if(x%y===0 && x%z===0){
//         console.log(x+" is divisible by both "+y+" and "+z);
//     }
//     else if(x%z===0){
//         console.log(x+" is divisible by "+z+" only");
//     }
//     else if(x%y===0){
//         console.log(x+" is divisible by "+y+" only");
//     }
//     else {
//         console.log(x + " is not divisible by " + y + " or " + z);
//     }
// }
// checkNumber();


//5
// function checkRange() {
//     let start = prompt("enter start");
//     let end = prompt("enter end");

//     if (isNaN(start) || isNaN(end)) {
//         alert("Invalid! Enter numeric values.");
//         return;
//     }

//     let multiples3 = "";
//     let multiples5 = "";
//     let sum = 0;

//     for (let i = start; i <= end; i++) {
//         if (i % 3 === 0) {
//             multiples3 += i + ", ";
//             sum += i; 
//         }
//         if (i % 5 === 0) { 
//             multiples5 += i + ", ";
//             sum += i;
//         }
//     }

//   console.log("Numbers mutliples of 3:", multiples3);
//   console.log("Numbers mutliples by 5:", multiples5);
//   console.log("sum is :", sum);
  
  
// }

// checkRange();




//6
// function stars(){
 
//   let rows=prompt("enter number of rows");
//     if(isNaN(rows)){
//         alert("invalid! enter a number");
//         return;
//     }
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// stars();

7
function oddEven() {
    let x = prompt("enter start:");
    let y = prompt("enter end:");
    let z = prompt("enter a string value");

    if (isNaN(x) || isNaN(y)) {
        alert("invalid! enter a number");
        return;
    }

    x = Number(x);
    y = Number(y);
    z = z.toLowerCase();

    if (z !== "odd" && z !== "even" && z !== "no") {
        alert("invalid input! enter odd, even, no");
        return;
    }

    let result = "";
    let sum = 0;

    let step = x <= y ? 1 : -1;

    for (let i = x; step === 1 ? i <= y : i >= y; i += step) {
        if (z === "odd" && i % 2 !== 0) {
            result += i + ", ";
            sum += i;
        } else if (z === "even" && i % 2 === 0) {
            result += i + ", ";
            sum += i;
        } else if (z === "no") {
            result += i + ", ";
            sum += i;
        }
    }

    console.log("result:", result);
    console.log("Sum:", sum);
}

oddEven();




