//global/globalThis in node js is equivalent to window in browser
// console.log(global);

//fs is built in module in node js which is used to read and write files
const fs = require('fs')

// console.log("first");

// const data=fs.readFileSync("./text.txt","utf-8") //utf-8 is used to read the file as a string instead of a buffer(weird data that we can't read)
// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }   
// })
// fs.writeFileSync("./text.txt","mazen world")

//REPL (Read Evaluate Print Loop) is a command line interface that allows you to interact with the node js environment. 
// You can use it to execute javascript code and see the results immediately. 
// To start the REPL, simply type "node" in your terminal and press enter. 
// You can then type any javascript code and see the results immediately. To exit the REPL, type ".exit" and press enter.


// console.log("finished");


// console.log(process.argv);
//process.argv is an array that contains the command line arguments passed to the node js process. 
// The first element is the path to the node executable, th
// e second element is the path to the script being executed, and the remaining elements are the command line arguments passed to the script. 
// For example, if you run "node index.js arg1 arg2", process.argv will be ["path/to/node", "path/to/index.js", "arg1", "arg2"].

//todo app crud operations


const  [,,command,...args]=process.argv;
// console.log(command,title);

const readTodos=()=>{
    const data=fs.readFileSync("./todos.json","utf-8");
    return JSON.parse(data);
}


const writeTodos=(todos)=>{
    fs.writeFileSync("./todos.json",JSON.stringify(todos,));
}

const addTodo=(title)=>{
  const todo={
    id:Date.now(),
    title,
    completed:false
  }
  const todos=readTodos();
  todos.push(todo);
//   fs.appendFileSync("./todos.json",JSON.stringify(todo));
  writeTodos(todos);
}

const listTodos=()=>{
    const todos=readTodos();
    console.log(todos);
}

const updateTodo=(id,title)=>{
    const todos=readTodos();
    const todo=todos.findIndex(todo=>todo.id==id);
    if(todo!=-1){
        todos[todo].title=title;
        writeTodos(todos);
    }
}

switch(command){
    case "create":
        addTodo(args[0]);
        break;
    case "read":
        listTodos();
        break;
    case "update":
        updateTodo(args[0],args[1]);
        break;    
    }
