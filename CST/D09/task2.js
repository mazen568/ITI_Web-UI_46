var originalImg = document.images[0];
var copy = originalImg.cloneNode(true);

originalImg.style.position = "absolute";
originalImg.style.top = "0";
originalImg.style.right = "0";

copy.style.position = "absolute";
copy.style.bottom = "0";
copy.style.left = "0";
document.body.append(copy);

var navList = document.getElementById("nav");
navList.style.margin = window.innerHeight* 0.40 + "px auto 0 auto";
navList.style.listStylePosition = "inside";
navList.style.listStyleType = "circle"; 




