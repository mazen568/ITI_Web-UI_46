var interval; 
var img1 = document.getElementById('i1');
var img2 = document.getElementById('i2');
var img3 = document.getElementById('i3');


document.getElementById('hi1').innerText = img1.outerHTML;
document.getElementById('hi2').innerText = img2.outerHTML;  
document.getElementById('hi3').innerText = img2.outerHTML;  



var i1d = 'l', i2d = 'r', i3d = 't';
function run() {

    if(i1d === 'r' && parseInt(getComputedStyle(img1).left)+10>570)
        i1d = 'l';
    else if(i1d === 'l' && parseInt(getComputedStyle(img1).left)-10<10)
        i1d = 'r';
    if(i2d ==='r' && parseInt(getComputedStyle(img2).left) + 10 > 570) 
        i2d = 'l';
    else if(i2d ==='l' && parseInt(getComputedStyle(img2).left) - 10 < 10) 
        i2d = 'r';

    if(i3d === 't' && parseInt(getComputedStyle(img3).top) - 10 < 10)
        i3d = 'b';
    else if(i3d === 'b' && parseInt(getComputedStyle(img3).top) + 10 > 468)
        i3d = 't';



    if(i1d==='r')
        img1.style.left = (parseInt(getComputedStyle(img1).left) + 10) + 'px';
    else
        img1.style.left = (parseInt(getComputedStyle(img1).left) - 10) + 'px';
    
    if(i2d==='r')
        img2.style.left = (parseInt(getComputedStyle(img2).left) + 10) + 'px';
    else
        img2.style.left = (parseInt(getComputedStyle(img2).left) - 10) + 'px';
    
    if(i3d==='t')
        img3.style.top = (parseInt(getComputedStyle(img3).top) - 10) + 'px';
    else
        img3.style.top = (parseInt(getComputedStyle(img3).top) + 10) + 'px';
    


        document.getElementById('hi1').innerText = img1.outerHTML;
        document.getElementById('hi2').innerText = img2.outerHTML;  
        document.getElementById('hi3').innerText = img2.outerHTML;  

}



function reset(){
    clearInterval(interval);
    img1.style.left = '570px';
    img2.style.left = '10px';
    img3.style.left = '280px';
    img1.style.top  = '240px';
    img2.style.top  = '240px';
    img3.style.top  = '468px';
    // interval = setInterval(run, 30);
}


document.getElementById('rst').addEventListener('click',reset);
document.getElementById('stp').addEventListener('click',()=>clearInterval(interval));
document.getElementById('go').addEventListener('click',function(){
   interval = setInterval(run,30);
});