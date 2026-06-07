//1
// var x=3,y=5;
// console.log(`${x} , ${y}`);
// [x,y]=[y,x];
// console.log(`${x} , ${y}`);

//2
// function minMax(...arr){
//     return [Math.min(...arr),Math.max(...arr)];
// }

// var [min,max]=minMax(3,5,1,9,2,50,-1);
// console.log(`min: ${min}, max: ${max}`);


//3
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
var isString= fruits.every(f=>typeof f==='string');
console.log(isString);

var startsA=fruits.some(f=>f[0]==='a');
console.log(startsA);

var startsBS=fruits.filter(f=>f[0]==='b'||f[0]==='s');
startsBS.forEach(f=>console.log(f));



var likedFruits=fruits.map(f=>`b7b el ${f}`)
likedFruits.forEach(f=>console.log(f));





