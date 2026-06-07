var customObject={
    id:"SD-10",
    location:"SV",
    addr:"123 st.",
    getSetGen(){
        for(var property in this){            
          (function(prop,obj){
            var secondPart=prop.charAt(0).toUpperCase()+prop.slice(1);
            //addr
            //getAddr
            obj["get"+secondPart]=function(){
                return obj[prop];
            }

            obj["set"+secondPart]=function(value){ 
                obj[prop]=value;
            }
          
         })(property,this);
        }
    }
}

customObject.getSetGen();
console.log(customObject.getId());
customObject.setAddr("27 mohamed farid")
console.log(customObject.getAddr());

user = { name: "Ali", age:10} 

customObject.getSetGen.call(user);
user.setName("mazen")
user.setAge(22)
console.log(user.getName());
console.log(user.getAge());




