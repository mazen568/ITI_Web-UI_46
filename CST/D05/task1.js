function ascendingOrder(a,b){
    return a-b;
}

function orderArray(){
    let n=prompt("enter the number of elements:");
    let arr=[];
    for (let i=0;i<n;i++){
        let element=prompt("enter element "+(i+1)+":");
        arr.push(element);
    }
    console.log("ascending order:");
    let ascedningArray=arr.sort(ascendingOrder);
    console.log(ascedningArray);
    console.log("descending order:");
    let descendingArray=arr.sort(ascendingOrder).reverse();
    console.log(descendingArray);
}

orderArray();