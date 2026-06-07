use ITI
//6
//a
db.instructors.insertOne({
  firstName: "mazen",
  lastName: "raafat",
  age: 23,
  salary:20000,
  address: {
    city: "cairo",
    street: "masr el gdeeda",
    building:27
  },
  courses: ["js","node","mongodb"]
})



//b
db.instructors.insertOne({
  age: 23,
  salary:20000,
  address: {
    city: "cairo",
    street: "masr el gdeeda",
    building:27
  },
  courses: ["js","node","mongodb"]
})
//3shan mongodb schema less


//c


let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];
		
db.instructors.insertMany(instructorsArray)



//7
//a
db.instructors.find()

//b
db.instructors.find({},{firstName:1,LastName:1,address:1})

//c
db.instructors.find({age:21},{firstName:1,"address.city":1})

//d
db.instructors.find({"address.city":"mansoura"},{firstName:1,age:1})

//e
//1
db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1}) 

//2
db.instructors.find({courses:"mvc"},{firstName:1,courses:1}) 


