//1
// function countCharacter(){
//     let text=prompt("enter text:");
//     let character
//     do {
//         character=prompt("enter character:");
//         if(character.length!==1){
//             alert("enter a single character");
//         }
//     } while (character.length!==1);
//     let sensitive=prompt("case sensitive or not(yes/no)?");
//     let count=0;
//     if (sensitive==="no") {
//         text = text.toLowerCase();
//         character = character.toLowerCase();
//       }
//     for(let i=0;i<text.length;i++){
//         if(text[i]===character){
//             count++;
//         }
//     }
//     console.log(count);
    
    
// }
// countCharacter();


//2
// function isPalindrome(){
//     let text=prompt("enter text:");
//     let sensitive=prompt("case sensitive or not(yes/no)?");
//     if (sensitive==="no") {
//         text = text.toLowerCase();
//       }
//     let isPalindrome=true;
//     for(let i=0; i<text.length/2 ;i++){
//          if(text[i]!==text[text.length-1-i]){
//             isPalindrome=false;
//          }
//     }

//     if (isPalindrome) {
//         console.log("palindrome");
//       } else {
//         console.log("not palindrome");
//       }

// }
// isPalindrome();

//R A D A R
//R-0 , R-4
//A-1 , A-3
//text[i]===text[text.length-1-i]


//3
// function largestWord(text){
    
//     let words=text.split(" ");
//     console.log(words);
    
//     let longest=words[0];

//     for(let i=1;i<words.length;i++){
//         if(words[i].length>longest.length){
//             longest=words[i];
//         }
//     }
//     console.log(longest);
    

// }
// largestWord("this is a javascript string demo");

//4
// function userInfo() {
//     let name;
//     let nameRegex = /^[a-zA-Z\s]+$/;
//     do {
//         name = prompt("enter name:");
//         if (!nameRegex.test(name)) {
//             alert("invalid name,enter letters only");
//         }
//     } while (!nameRegex.test(name));

//     let phone;
//     let phoneRegex = /^\d{8}$/;
//     do {
//         phone = prompt("enter phone no (8 digits):");
//         if (!phoneRegex.test(phone)) {
//             alert("invalid phone no  (8 digits)");
//         }
//     } while (!phoneRegex.test(phone));

//     let mobile;
//     let mobileRegex = /^(010|011|012)\d{8}$/;
//     do {
//         mobile = prompt("enter mobile no (11 digits, starts with 010, 011, or 012):");
//         if (!mobileRegex.test(mobile)) {
//             alert("invalid mobile no. (11 digits, starts with 010, 011, or 012)");
//         }
//     } while (!mobileRegex.test(mobile));

//     let email;
//     let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
//     do {
//         email = prompt("enter email:");
//         if (!emailRegex.test(email)) {
//             alert("invalid email. (abc@123.com)");
//         }
//     } while (!emailRegex.test(email));

//     let color;
//     do {
//         color = prompt("choose a color: red, green, blue:");
//         color = color.toLowerCase();
//         if (!(color === "red" || color === "green" || color === "blue")) {
//             alert("invalid color.red green blue");
//         }
//     } while (!(color === "red" || color === "green" || color === "blue"));

//     console.log("%cuser info: name: " + name + ", phone: " + phone + ", mobile: " + mobile + ", email: " + email, "color:" + color + ";");
// }
// userInfo();

//5
// function geometry(){
//     let radius = prompt("enter radius:");
//     let area = Math.PI*radius*radius;
//     alert("area is: "+area.toFixed(2));

//     let value = prompt("enter value:");
//     let squareRoot = Math.sqrt(value);
//     alert("square root is: "+squareRoot);

//     let angle = prompt("enter angle:");
//     let radian = angle * (Math.PI / 180);
//     let cos = Math.cos(radian);
//     console.log("cos is: "+cos.toFixed(2));
// }
// geometry();

