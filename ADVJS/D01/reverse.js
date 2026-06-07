function reverse1() {
    return [].reverse.apply(arguments);
    //apply btakhod el parameters 3la shakl array
}

console.log(reverse1(1, 2, 3, 4));      

function reverse2(){
    return [].reverse.call(arguments);
    
}


console.log(reverse2(1, 2, 3, 4));      

