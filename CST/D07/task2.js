let form =document.getElementById("form");

form.addEventListener("submit",function name(event) {

    let confirmed = confirm("are you sure you want to submit");
    if(!confirmed)
    {
        event.preventDefault();
        alert("canceled");
    }
})
