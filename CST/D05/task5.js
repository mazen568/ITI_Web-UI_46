let childWindow;
let distance=0;
let direction=1;
let intervalId;
function openChild(){
  childWindow=window.open("child2.html","","width=200,height=200,scrollbars=yes");
  childWindow.moveTo(0,200);
  childWindow.focus();
  intervalId=setInterval(function () {
    distance+=100*direction;
    let remaining=childWindow.document.body.scrollHeight - 200;
    if(distance>remaining||distance<=0){
      direction*=-1;
    }
    childWindow.scrollTo(0, distance);
}, 150);
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
    let remaining=childWindow.document.body.scrollHeight - 200;
    if(distance>remaining||distance<=0){
      direction*=-1;
    }
    childWindow.scrollTo(0, distance);
    timoutId=setTimeout(moveChild,150);
}


function openChild2(){
    childWindow=window.open("child2.html","","width=200,height=200,scrollbars=yes");
    childWindow.moveTo(0,200);
    childWindow.focus();
    moveChild();
}

function stopChild2(){
    clearTimeout(timoutId);
    childWindow.focus();
    distance=0;
    direction=1;
}