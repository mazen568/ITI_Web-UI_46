let childWindow;
function displayMessage() {
    childWindow = window.open("child.html", "", "width=400,height=400");
    
    setTimeout(function() {
        
        childWindow.document.body.innerHTML = "<h3 id='message'></h3>";
        let messageElement = childWindow.document.getElementById("message");
        let text = ["M", "a", "z", "e", "n"];
        let index = 0;
        let intervalId = setInterval(function() {
            messageElement.innerText += text[index];
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                setTimeout(() => {
                    childWindow.close();
                }, 2000);
            }
        }, 100); 
    }, 100); 
}