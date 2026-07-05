let images=['images/slideshow/1.jpg',
            'images/slideshow/2.jpg','images/slideshow/3.jpg',
            'images/slideshow/4.jpg','images/slideshow/5.jpg',
            'images/slideshow/6.jpg'
        ];
let index=0;
let intervalId;
function showImage(){
    let img=document.getElementById("img");
    img.src=images[index];
}
function next(){
    if (index < images.length - 1) { 
        index++;
        showImage(); 
    }
}
function previous(){
    if (index > 0) {
        index--;
        showImage(); 
    }
}

function slideShow(){
    intervalId=setInterval(() => {
        index++;
        if(index>images.length-1)
            index=0;
        showImage();  
    }, 1000);
}
function stop(){
    clearInterval(intervalId);
}
