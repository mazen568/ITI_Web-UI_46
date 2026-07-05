let childWindow;
let distance=0;
let direction=1;
let intervalId;
function openChild(){
  childWindow=window.open("child.html","","width=200,height=200");
  childWindow.focus();
  intervalId=setInterval(function () {
    distance+=100*direction;
    if(distance+200>=screen.height||distance<0){
      direction*=-1;
    }
    childWindow.moveTo(0, distance);
}, 100);
}

function stopChild(){
  clearInterval(intervalId);
  childWindow.focus();
  distance=0;
  direction=1;
}

let timoutId;
function moveChild(){
    distance+=100*direction;
    if(distance+200>=screen.height||distance<0){
      direction*=-1;
    }
    childWindow.moveTo(0, distance);
    timoutId=setTimeout(moveChild,100);
}


function openChild2(){
    childWindow=window.open("child.html","","width=200,height=200");
    childWindow.focus();
    moveChild();
}

function stopChild2(){
    clearTimeout(timoutId);
    childWindow.focus();
    distance=0;
    direction=1;
}