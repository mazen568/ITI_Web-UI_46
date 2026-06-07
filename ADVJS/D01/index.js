// var z=1
// function outerfn(x,y){
//     var w=1;
//     function innerfn(a,b){//hdwr 3la x y z w fl mkan el et3ml fe creation(gowa outerfn) ll function msh fe mkan el call(global 3ndna dlw2te)
//         return x+y+z+w+a+b;
//     }
//     return innerfn;
// }
// //feh copy already mn el execution bta3 outerfn abl return statement w da esmo context execution
// //fa ento htgr3l l outerfn 3n tree2 function et3mlha create gowa el scope bta3ha el hya innerfn w da esmo closure
// var result=outerfn(2,3)
// console.log(result(1,1));

function outerfn(){
    var arr=[]
    for (var i = 0; i < 3; i++) {
       arr.push(
        (function(j){
            return function(){
        console.log(j);
            }
       })(i))
    }
    return arr;
}
var result=outerfn()//[f,f,f]
result[0]()
result[1]()
result[2]()
