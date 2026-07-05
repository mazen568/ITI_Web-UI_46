let input=document.getElementById("input");

input.addEventListener("keydown", function(event) {
    console.log("keydown:", event.key);
});

input.addEventListener("keypress", function(event) {
    console.log("keypress:", event.key);
});