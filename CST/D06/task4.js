let index = 0;
let lastIndex = 0;
let images = document.getElementsByClassName("img"); 
let intervalId ;
function changeImage() {
    images[lastIndex].src = "images/marbles/marble1.jpg";
    images[index].src = "images/marbles/marble3.jpg";
}

function show() {
    intervalId = setInterval(() => {
        changeImage();
        lastIndex = index;
        index++;
        if (index >= images.length) 
            index = 0;
    }, 1000); 
}

function hover(){
  clearInterval(intervalId)
}
function leave(){
    show();

}

show();

