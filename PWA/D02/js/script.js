

const notifyBtn = document.getElementById("enableNotify");

notifyBtn.addEventListener("click", () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            alert("Notifications enabled! Your tasks will notify you on time.");
            notifyBtn.style.display='none'
        }
    });
});

function scheduleNotifications() {
    db.then(mydb => {
        let tx = mydb.transaction("Tasks", "readonly");
        let store = tx.objectStore("Tasks");
        return store.getAll();
    })
    .then(tasks => {
        tasks.forEach(task => scheduleNotificationForTask(task));
    })
    .catch(err => console.log(err));
}

function scheduleNotificationForTask(task) {
  const monthMap = {
    "Janaury": 0, 
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
  };

  const monthIndex = monthMap[task.month];

  const taskDate = new Date(
    parseInt(task.year),
    monthIndex,
    parseInt(task.day),
    parseInt(task.hours),
    parseInt(task.mins)
  );

  const diff = taskDate.getTime() - Date.now();
  
  console.log(taskDate);
  console.log(diff);

  

  if (diff <= 0) {
    console.log("Task time already passed or invalid");
    return;
  }

  setTimeout(() => {
    showNotification(task);
    markTaskNotified(task.id);
  }, diff);
}


function showNotification(task) {
    navigator.serviceWorker.getRegistration().then(reg => {
        if (!reg) return;
        const options = {
            body: `It's time for: ${task.title}`,
            icon: '/assets/x.jpg',
            actions: [
                { action: 'markdone', title: 'Mark Done' },
                { action: 'close', title: 'Close' }
            ],
            data: { taskId: task.id }
        };
        reg.showNotification(task.title, options);
    });
}

function markTaskNotified(taskId) {
    db.then(mydb => {
        let tx = mydb.transaction("Tasks", "readwrite");
        let store = tx.objectStore("Tasks");
        return store.get(taskId)
            .then(task => {
                if (task) {
                    task.notified = true;
                    return store.put(task);
                }
            });
    }).catch(err => console.log(err));
}

navigator.serviceWorker.addEventListener("message", event => {
    const taskId = event.data.taskId;
    const taskElement = document.getElementById(`task-${taskId}`);
    if (taskElement) {
        taskElement.style.textDecoration = "line-through";
    }
});

scheduleNotifications();
