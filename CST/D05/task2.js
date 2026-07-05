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

    console.log(addressObj.buildingNo + " " + addrObj.street + ", " + addrObj.city + " city registered in " + day + "/" + month + "/" + year);
}
let addressObj=getAddress();    
showAddr(addressObj);