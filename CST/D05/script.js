//1.1
// function orderArray(){
//     let n=prompt("Enter number of elements");
//     let arr=[];
//     for(let i=0;i<n;i++){
//         let element=prompt("Enter element "+(i+1));
//         arr.push(Number(element));
//     }
    
//     console.log("ascending order: "+arr.sort((a,b)=>a-b));
//     console.log("descending order: "+arr.sort((a,b)=>b-a));
// }

// orderArray();   

//1.2.1
function getAddress(){
    let street=prompt("Enter street");
    let buildingNo=prompt("Enter building number");
    let city=prompt("Enter city");

    let address={
        street:street,
        buildingNo:buildingNo,
        city:city
    };


    return address;
}


function showAddr(addrObj) {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();

    return addressObj.buildingNo + " " + addrObj.street + ", " + addrObj.city + " city registered in " + day + "/" + month + "/" + year;
}
let addressObj=getAddress();    
console.log(showAddr(addressObj));


//1.2.2

// function getVal(){
//     let name=prompt("Enter name");
//     let age=prompt("Enter age");
    
//     let valObject={
//         name:name,
//         age:age
//     };

//     return valObject;
// }

// function displayVal(valObject,valString){
       
//     console.log(valObject[valString]+" years old");
 
// }

// let valueObject=getVal();
// displayVal(valueObject,"age");



//2.1.1
// let childWindow;
// let distance=0;
// let direction=1;
// childWindow.moveTo(0,0);    
// function openChild(){
//     childWindow=window.open("child.html","","width=200,height=200");
//     setInterval(() => {
//        distance+=80*direction; 
//     if(distance+200>screen.height || distance<0){
//         direction *= -1;
//        distance+=80*direction; 
//     }

//     childWindow.moveTo(0,distance);
//     childWindow.focus();
             
//     }, 100);
// }

// console.log(screenHeight);


// function closeChild(){
//     childWindow.close();
// }





// let childWindow;
// let distance=0;
// let direction=1;
// childWindow.moveTo(0,0); 


// function moveChild() {
//     distance += 80 * direction;
//     if (distance + 200 > screen.height || distance < 0) {
//         direction *= -1;
//         distance += 80 * direction;
//     }
//     childWindow.moveTo(0, distance);
//     childWindow.focus();

//     setTimeout(moveChild, 300); 
// }

// function openChild2() {
//     childWindow = window.open("child.html", "", "width=200,height=200");
//     moveChild();
// }



// let adWindow;
// let distance=0;
// let direction=1;

// function openChild3(){
//     adWindow=window.open("child.html","","width=200,height=200,scrollbars=yes");
//     setInterval(() => {

//         const maxScroll = adWindow.document.body.scrollHeight - adWindow.innerHeight;
        
//         distance += 20 * direction; 

//         if (distance > maxScroll || distance < 0) {
//             direction *= -1;  
//             distance += 20 * direction;
//         }

//         adWindow.scrollTo(0, distance);
//         adWindow.focus();

//     }, 100); 

// }

// function closeChild(){
//     adWindow.close();
// }





