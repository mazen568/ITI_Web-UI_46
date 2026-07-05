function getInfo(){
    let name=prompt("enter name");
    let age=prompt("enter age");

    let person={
        name:name,
        age:age
    };
    return person;
}

function dispVal(personObj, key) {
    if(key==="age")
     console.log(personObj[key]+" years old");
    else
     console.log("name: "+personObj[key]);
}

let personObj=getInfo();    
dispVal(personObj,"name");


