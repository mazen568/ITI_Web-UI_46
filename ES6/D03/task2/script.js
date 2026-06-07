var obj = {
    name: 'mazennnn',
    address: 'cairo',
    age: 30
  };
  
  var handler = {
    get(target, prop) {
      if (target.hasOwnProperty(prop)) {
        return target[prop];
      } else {
        throw new Error('this property does not exist');
      }
    },
  
    set(target, prop, value) {
      if (!target.hasOwnProperty(prop)) {
        throw new Error('this property does not exist');
      }
  
      if (prop === "name") {
        if (typeof value === "string" && value.length === 7) {
          target[prop] = value;
        } else {
          throw new Error('name must be string of 7 characters');
        }
      }
      else if (prop === "address") {
        if (typeof value === "string") {
          target[prop] = value;
        } else {
          throw new Error( 'address must be a string');
        }
      }
      else if (prop === "age") {
        if (typeof value === "number" && value >= 25 && value <= 60) {
          target[prop] = value;
        } else {
          throw new Error('age must be number between 25 and 60');
        }
      }
  
    }
  };
  
var myProxy = new Proxy(obj, handler);

      

  