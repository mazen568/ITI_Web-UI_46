var obj = {
    name: 'mazennnn',
    address: 'cairo',
    age: 30,
    major:'cs'
  };
var handler = {
    has(target, prop) {
        if (prop === 'name') 
            return false;
        else 
         return Reflect.has(target,prop);
       },
       deleteProperty(target, prop) {
        if (prop === 'age') 
            return false; 
        return Reflect.deleteProperty(target, prop);//e3ml delete 3ady
      },

      ownKeys(target) {
        return Reflect.ownKeys(target).filter(key => key !== 'age'); 
      },
      getOwnPropertyDescriptor(target, prop) {
        if (prop === 'age') {
          return {
            value: 10,
            writable: false,
            enumerable: false,
            configurable: true
          };
        }
        return Reflect.getOwnPropertyDescriptor(target, prop);
      },
      apply(target, thisArg, args) {
    
        let doubleArgs = args.map(x => x * 2);
    
        let result = target.call(thisArg, ...doubleArgs);
    
        return result;
      }

  };
  
let myProxy = new Proxy(obj, handler);

console.log('name' in myProxy);    
console.log('address' in myProxy);   
console.log('age' in myProxy);     


delete myProxy.major; // tnf3
console.log("delete age: "+delete myProxy.age);  // mynf3sh
console.log(myProxy); 
      

console.log(Object.keys(myProxy)); // ['name', 'address']

console.log(Object.getOwnPropertyDescriptor(myProxy, 'age'));
console.log(Object.getOwnPropertyDescriptor(myProxy, 'name'));

function sum(a, b) {
  return a + b;
}

console.log(sum(10,20));
let proxySum = new Proxy(sum, handler);
console.log(proxySum(10, 20));
