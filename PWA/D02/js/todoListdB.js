var db = idb.open('TodoList',1,upgradeDB=>{
  upgradeDB.createObjectStore('Tasks',{keyPath:'id'})
})


document.getElementById("AddTask").addEventListener("click",function(){
    let task={
       id: Date.now(), 
       title : document.getElementById("TaskTitle").value,
       hours : document.getElementById("Hours").value,
       mins : document.getElementById("Mins").value,
       day : document.getElementById("Days").value,
       month : document.getElementById("Months").value,
       year : document.getElementById("Years").value,
       notified:false
    }
    db.then(mydb=>{
      let tx= mydb.transaction("Tasks","readwrite")
      let store=tx.objectStore("Tasks")
      return store.add(task)
      .then(() => {
        console.log("task added");
        scheduleNotificationForTask(task);
        displayTasks(); 
      })
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
})


function displayTasks() {
  db.then(mydb=>{
    let tx= mydb.transaction("Tasks","readonly")
    let store=tx.objectStore("Tasks")
    return store.getAll()
    .then((tasks)=>{
      let resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML=""
      tasks.forEach(task => {
        let str=` <h2 id="task-${task.id}">
          ${task.title} - ${task.hours}:${task.mins}, ${task.day} ${task.month} ${task.year}
          <span data-id="${task.id}" onclick="deleteTask(${task.id})"> x </span>
        </h2>
      `;
      resultsDiv.innerHTML += str;
      });

    }
     )
    .catch(err=>console.log(err))
  }).catch(err=>console.log(err))
}

displayTasks();

function deleteTask(taskId){
  db.then(mydb=>{
    let tx= mydb.transaction("Tasks","readwrite")
    let store=tx.objectStore("Tasks")
    return store.delete(taskId)
    .then(()=>{
      console.log(`task-${taskId} deleted`)
      let deletedTask = document.getElementById(`task-${taskId}`);
      deletedTask.remove();
    })
    .catch((err)=>console.log(err))   
  })
  .catch((err)=>console.log(err))

}