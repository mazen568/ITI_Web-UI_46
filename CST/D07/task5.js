let input=document.getElementById("input");
let output=document.getElementById("output");

input.addEventListener("keydown", function(event) {
    let char = event.key;        
    let physicalKey = event.code; 

    if (char.length === 1) {
        output.textContent += char+physicalKey;
    }

    if (event.ctrlKey && char=== 's') {
        event.preventDefault();
        alert("prevented");
    }

    console.log("character: " + char + " | physical Key: " + physicalKey);

});
