function Vehicle(speed,color){
    var speed=speed;
    var color=color;

    if(typeof speed!=="number")
        throw new Error("speed should be a number");

    
    if(typeof color!=="string")
        throw new Error("color should be a string");

    Object.defineProperties(this,{
        vehicleSpeed:{
            get:function(){
                return speed;
            },
            enumerable: false,
            configurable: false
        },
        vehicleColor:{
            get:function(){
                return color;
            },
            enumerable: false,
            configurable: false
        }
    })    
}
Vehicle.prototype.turnLeft = function() { 
   console.log("left");
};
Vehicle.prototype.turnRight = function() { 
   console.log("right");
};

Vehicle.prototype.start = function() { 
    return true;
 };

 Vehicle.prototype.stop = function() { 
    return false;
 };

 Vehicle.prototype.goForward = function(speed, accel) {
    console.log(speed + accel);
};
Vehicle.prototype.goBackward = function(speed, accel) {
    console.log(speed - accel);
};

Vehicle.prototype.toString = function() {
    return "vehicle speed: " + this.vehicleSpeed + ", color: " + this.vehicleColor;
};
Vehicle.prototype.valueOf = function() {
    return this.vehicleSpeed;
};

function Bicycle(speed,color){
    Vehicle.call(this,speed,color);
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell=function(){
    console.log("the bell is ringing");
}

function MotorVehicle(speed,color,sizeOfEngine,licensePlate){
    Vehicle.call(this,speed,color);
    var sizeOfEngine=sizeOfEngine;
    var licensePlate=licensePlate;
    if (typeof sizeOfEngine !== "number") 
        throw new Error("size of engine should be a number");
    if (typeof licensePlate !== "string") 
        throw new Error("license plate should be a string");

    Object.defineProperties(this,{
        engineSize:{
            get:function(){
                return sizeOfEngine;
            },
            enumerable: false,
            configurable: false
        },
        license:{
            get:function(){
                return licensePlate;
            },
            enumerable: false,
            configurable: false
        }
    })    
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;


MotorVehicle.prototype.getSizeOfEngine = function() { 
    return this.engineSize;
};
MotorVehicle.prototype.getLicensePlate = function() { 
    return this.license;
};



function DumpTruck(speed, color, sizeOfEngine, licencePlate, loadCapacity, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);

    var loadCapacity=loadCapacity;
    var numWheels=numWheels;
    var weight=weight;

    if (typeof loadCapacity !== "number")
         throw new Error("load capacity shoud be a number");
    if (typeof numWheels !== "number") 
        throw new Error("number of wheels shoud be a number");
    if (typeof weight !== "number") 
        throw new Error("weight shoud be a number");

    Object.defineProperties(this, {
        load: {
            get:function(){
                return loadCapacity;
            },
            enumerable: false,
            configurable: false
            },
        wheels: { 
            get:function(){
                return numWheels;
            },
            enumerable:true, 
            configurable:false 
        },
        weight: { 
            get:function(){
                return weight;
            },
            enumerable:true, 
            configurable:false 
        }
    });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function() {
     console.log("Load lowered");
};
DumpTruck.prototype.raiseLoad = function() { 
    console.log("Load raised");
};




function Car(speed, color, sizeOfEngine, licencePlate, numOfDoors, numWheels, weight) {
    MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);
    var numOfDoors=numOfDoors;
    var numWheels=numWheels;
    var weight=weight;

    if (typeof numOfDoors !== "number") 
        throw new Error("number of doors should be a number");
    if (typeof numWheels !== "number") 
        throw new Error("number of wheels should be a number");
    if (typeof weight !== "number") 
        throw new Error("weight should be a number");

    Object.defineProperties(this, {
        doors: { 
            get:function(){
                return numOfDoors;
            },
            enumerable: false,
            configurable: false 
        },
        wheels: { 
            get:function(){
                return numWheels;
            },
            enumerable: false,
            configurable: false 
        },
        weight: { 
            get:function(){
                return weight;
            },
            enumerable: false,
            configurable: false
        }
    });
};

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function() { 
    console.log("air conditioner on");
     
};
Car.prototype.displayNumOfDoors = function() { 
    console.log(this.doors);
};








    var myBike = new Bicycle(20, "Blue");
    console.log(myBike.toString()); 
    myBike.ringBell();             
    myBike.turnLeft();      
    myBike.turnRight();             
    console.log("bike speed valueOf:", myBike + 10); 

    var myMV = new MotorVehicle(100, "red", 2000, "888");
    myMV.turnLeft();      
    myMV.turnRight();      
    myMV.goForward(100, 20);
    console.log("engine size of motor vehicle:", myMV.engineSize); 
    console.log(myMV.toString());   
    
    

    var myTruck = new DumpTruck(60, "yellow", 5000, "999", 10000, 10, 15000);
    myTruck.raiseLoad();      
    myTruck.turnLeft();      
    myTruck.turnRight();       
    console.log("wheels of truck:", myTruck.wheels); 
    console.log(myTruck.toString());


    var myCar = new Car(120, "green", 1600, "777", 4, 4, 1200);
    myCar.switchOnAirCon();
    myCar.turnLeft();      
    myCar.turnRight();
    console.log("car engine size: ",myCar.engineSize);
    console.log("doors of car:", myCar.doors); 
    console.log(myCar.toString());


    console.log("sum of speed of car and truck: ",myCar+myTruck);
    
  

