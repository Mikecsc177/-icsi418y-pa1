//Accessing the HTML elements step 1
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

//Task storage step 2 
const tasks = [];

//Responding to form submission step 3 
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    //prevents a task being created if the name is empty
    if (taskName === "") {
        return; 
    }

    // Create the task object
    const newTask = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };
  
    //add the task step 4
    tasks.push(newTask);
    taskInput.value = "";
    displayTasks();
});

//Display tasks step 5 
function displayTasks() {
    taskList.innerHTML = "";
   
   
    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];
       

        const taskElement = document.createElement("div");
        taskElement.classList.add("task"); 
        taskElement.classList.add(currentTask.priority); 
       

        if (currentTask.completed === true) {
            taskElement.classList.add("completed");
        }
        

        const taskText = document.createElement("span");
        taskText.textContent = `${currentTask.name} - [${currentTask.priority}] `;
       
        //Completing a task step 6
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", function() {
            currentTask.completed = !currentTask.completed; 
            displayTasks();
        });
      
        //Deleting a task step 7
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });

    
        taskElement.appendChild(taskText);
        taskElement.appendChild(completeBtn);
        taskElement.appendChild(deleteBtn);
        taskList.appendChild(taskElement);
    }
}