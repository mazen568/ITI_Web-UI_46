

document.getElementById("submitBtn").addEventListener("click", function () {
try{
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    let color = document.getElementById("colorSelect").value;
    let genderInputs = document.getElementsByName("gender"); 
    let gender;
    
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) { 
            gender = genderInputs[i].value; 
        }
    }

    setCookie("name", name, new Date("2026-12-31"));
    setCookie("age", age, new Date("2026-12-31"));
    setCookie("gender", gender, new Date("2026-12-31"));
    setCookie("color", color, new Date("2026-12-31"));

    let userVisits="visits_"+name;
    let visits=getCookie(userVisits);
    visits = visits ? Number(visits) + 1 : 1;

    setCookie(userVisits, visits, new Date("2026-12-31"));

    location.href = "profile.html";
}
    catch(err){
        console.error("error: "+err.message)
    }
})