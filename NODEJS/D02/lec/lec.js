import express from "express";
import fs from "fs/promises";

// console.log(express());

const app = express();//app is an object that has many methods to handle http requests and responses from express function
app.use(express.json());


const read = async()=>{
   const data= await fs.readFile("./students.json","utf-8");
   return JSON.parse(data);
}

const write = async(students)=>{
   await fs.writeFile("./students.json",JSON.stringify(students));
}


const createStudent=(name,age)=>{
    let student={
        id:Date.now(),
        name,
        age
    }
    return student;
}

app.get("/test",(req,res)=>{
    res.send({ name: "Maazen" });
    //send is a method that sends a response to the client
})

//create new student
app.post("/student",async(req,res)=>{
console.log(req.body);
try {
    const {name,age}=req.body;
    if(!name || !age){
    return res.status(400).send({message:"name and age are required"});
    }
    const student=createStudent(name,age);
    const students=await read();
    students.push(student);
    await write(students);
    res.status(201).json({data:student});
    
} catch (error) {
    res.status(500).json({message:error.message});
}



})


app.listen(5000,()=>{//listen is a method that takes a port number and a callback function that is called when the server is running
    console.log("server is running on port 5000");
})
