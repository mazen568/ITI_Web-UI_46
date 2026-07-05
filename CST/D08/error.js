// function checkTwoParamters(p1,p2){

//     if(arguments.length!==2)
//         throw new Error("expects exactly 1 parameter");

//     return [p1, p2];

// }

// console.log("before error");

// try {
//     console.log(checkTwoParamters(5,7,8)); 
// } catch (err) {
//     console.error("error:", err.message);
// }

// console.log("after error"); 


function add(){
    if(arguments.length===0)
        throw new Error("expects at least 1 parameter");
    
    let sum=0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new TypeError("all arguments must be numbers");
        }
        sum += arguments[i];
    }

    return sum;

}

console.log("before error");

try {
    console.log(add(1,3,6,9.6,""));      
} catch (err) {
    console.error("Error:", err.message);
}

console.log("after error"); 

