function displayInfo(){
    let queryString = window.location.search.substring(1).split("&"); 
    console.log(queryString);
    let name=queryString[0].split("=")[1];
    let title=queryString[1].split("=")[1];
    let email=queryString[2].split("=")[1];
    let mobile=queryString[4].split("=")[1];
    let gender=queryString[5].split("=")[1];
    let address=queryString[6].split("=")[1];

    document.getElementById("name").innerText = "Name: " + name;
    document.getElementById("title").innerText = "Title: " + title;
    document.getElementById("email").innerText = "Email: " + email;
    document.getElementById("mobile").innerText = "Mobile: " + mobile;
    document.getElementById("gender").innerText = "Gender: " + gender;
    document.getElementById("address").innerText = "Address: " + address;
    

    
    const userAgent = navigator.userAgent.toLowerCase();
    if (!userAgent.includes("edg") ) {
        document.getElementById("browser").innerText =
            "use edge browser";
    }
    
    
    

}
displayInfo();