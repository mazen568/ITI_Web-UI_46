let custEvent=new Event("mazen");
let input=document.getElementById("name");



input.addEventListener("mazen", function() {
    alert("you did not enter any data in 30 seconds");
});

let timer;
input.addEventListener("focus",function(){
     timer=setTimeout( function() {
        if (input.value === "") {
            input.dispatchEvent(custEvent); 
        }
    }, 3000);
})


input.addEventListener("input", function() {
    clearTimeout(timer);
});