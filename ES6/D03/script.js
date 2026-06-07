//success callback fn
//fail callback fn
var x=10;
var mypromise= new Promise(function(success,fail){
        if(x>5)
        {
            setTimeout(() => {
                success("i am success")
            }, 2000);
        }
        else{
            setTimeout(() => {
                fail("i am fail")
            }, 2000);
        }


})

var x2=10;
var mypromise2= new Promise(function(success,fail){
        if(x2<5)
        {
            setTimeout(() => {
                success("i am success2")
            }, 5000);
        }
        else{
            setTimeout(() => {
                fail("i am fail2")
            }, 5000);
        }


})
//then exectues on success
//catch executes on fail 

console.log(mypromise);
console.log(mypromise2);


mypromise.then(function(msg){
    console.log(msg);
}).catch(function(){})

mypromise2.then(function(msg){
    console.log(msg);
}).catch(function(msg){
    console.log(msg); 
    
})



function myfun(method,url){
    var mypromise= new Promise();
}