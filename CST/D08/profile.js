try{
    let name = getCookie("name");
    let gender = getCookie("gender");
    let color = getCookie("color") ;
    let userVisits = "visits_" + name; 
    let visits = getCookie(userVisits);

        
    let img = gender === "male" ? "assets/1.jpg" : "assets/2.jpg";

    document.getElementById("profileContainer").innerHTML=
    '<img src="' + img + '" alt="profile" width="200" height="200">' +
    '<h1 >Hello, ' + '<span style="color:'+color+'">'+name+'</span>' + '</h1>' +
    '<h2>You have visited this site ' + '<span style="color:'+color+'">'+visits+' </span>' + 'times</h1>' ;
}
catch (err) {
    console.error("Error:", err.message);
}