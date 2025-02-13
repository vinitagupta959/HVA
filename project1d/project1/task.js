let empatyContainer = document.getElementById("empatyContainer");
let emptyAddbutton = document.getElementById("emptyButton");
let allTasks = document.getElementById("alltasks");
let taskAdding = document.getElementById("taskAdding");
let addTaskButton = document.getElementById("addTask");
let saveButton = document.getElementById("saveButton");
let mainContainer = document.getElementById("mainContainer");
let filterContainer = document.getElementById("filter");
let priorityButton = document.getElementById("priority");
let CompletedButton = document.getElementById("completed")
let pandingButton = document.getElementById("panding");
let dueDateButton = document.getElementById("dueDate");
let alltaskButton = document.getElementById("alltask");


let tasklist;
if (localStorage.getItem("task")) {
    tasklist = JSON.parse(localStorage.getItem("task")) || [];
} else {
    tasklist = [];
}
console.log(tasklist);
taskShow(tasklist)
function taskShow(tasklist){
if (tasklist.length > 0) {
    taskView(tasklist)
    console.log(tasklist);
    allTasks.style.display = "block";
    filterContainer.style.display = "block";
} else {
    empatyContainer.style.display = "block";
    allTasks.style.display = "none"; 
    filterContainer.style.display="none";
};

}


function taskView(tasklist){
    if (tasklist.length>3){
        dayWise(tasklist);
    }else{
        displayTasks(tasklist);
    }
}


emptyAddbutton.addEventListener('click', function () {
    taskAdding.style.display = "block";
    empatyContainer.style.display = "none";
    mainContainer.style.display = "none"
});

addTaskButton.addEventListener('click', function () {
    taskAdding.style.display = "block";
    const taskContainer = document.getElementById("alltasks");
    taskContainer.style.display = "none"
});





 saveButton.addEventListener('click', function () {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    let priority = selectPriority();
    let repetDate = selectDate();
    let tasklist = JSON.parse(localStorage.getItem("task")) || [];  
    if (title === "") {
        alert('Title is required');
        return;
    }
    if (priority === null) {
        alert('Choose Priority');
        return;
    }
    if (repetDate === null) {
        alert('Choose Repeat');
        return;
    }
    let task = {
        title: title,
        description: description || "No description", 
        priority: priority,
        repetDate: repetDate,
        completed: false
    };
    tasklist.push(task);
    localStorage.setItem("task", JSON.stringify(tasklist));

    alert("Task is added");
    resetcontainer();
    displayTasks(tasklist);
    allTasks.style.display = "block"; 
    document.getElementById("taskAdding").style.display = "none"; 
    taskView(tasklist); 
});





function selectPriority() {
    const selectPriority = document.querySelector('input[name="priyority"]:checked');
    if (!selectPriority) {
        return null;
    } else {
        return selectPriority.value;
    }
}


function selectDate() {
    const dateValue = document.querySelector('input[name="Repet"]:checked');
    if (!dateValue) {
        return null;
    } else {
        return dateValue.value;
    }
}

function displayTasks(tasks) {
    const taskContainer = document.getElementById("alltasks");
    taskContainer.innerHTML = ""; // Clear previous tasks
    tasks.forEach((task, index) => {
        console.log(task, index);
        taskContainer.innerHTML += 
        `<div class="task-card">
         <h2>${task.title}</h2>
          <p>${task.description}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <p><strong>Repeat:</strong> ${task.repetDate}</p>
          <button onclick="markAscompleted(${index})">Mark as completed</button>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>`;
    });
}

let cancleButton = document.getElementById('cancle');
cancleButton.onclick = function () {
   taskAdding.style.display = "none"
 }


function markAscompleted(index) {
    console.log(tasklist[index]);
    if (tasklist[index]) {
        tasklist[index].completed = true;
        localStorage.setItem("task", JSON.stringify(tasklist));
        displayTasks(tasklist)
    }
 }

function editTask(index) {
    console.log(index);
    let selectTask = tasklist[index];
    document.getElementById('title').value = selectTask.title;
    document.getElementById('description').value = selectTask.description;
    let priorityInput = document.querySelectorAll('input[name="priyority"]');
    priorityInput.forEach(function(input) {
        if (input.value === selectTask.priority) {
            input.checked = true;
        }
    });
    let repeatInput = document.querySelectorAll('input[name="Repet"]');
    repeatInput.forEach(function(input) {
        if (input.value === selectTask.repetDate) {
            input.checked = true;
        }
    });
    let updateButton = document.createElement('button');
    updateButton.innerText = "Update";
    updateButton.onclick = function () {
        updateTask(index);
    }
    taskAdding.style.display = "block";
    saveButton.style.display = "none"; 
    allTasks.style.display = "none";  
    taskAdding.appendChild(updateButton);
 }
 
 
 function updateTask(index) {
    tasklist[index].title = document.getElementById('title').value;
    tasklist[index].description = document.getElementById('description').value;
    tasklist[index].priority = selectPriority(); 
    tasklist[index].repetDate = selectDate();    
    localStorage.setItem("task", JSON.stringify(tasklist));
    taskAdding.style.display = "none";
    resetcontainer();
    dayWise(tasklist);
    displayTasks(tasklist);
    allTasks.style.display="block"
 }
 

 function deleteTask(index){
    tasklist.splice(index, 1);
    console.log(tasklist[index]);
    localStorage.setItem("task",JSON.stringify(tasklist));
     displayTasks(tasklist);
     taskShow(tasklist);
 }
 
 function resetcontainer() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    const priorityInput = document.querySelector('input[name="priority"]:checked');
    if (priorityInput) {
        priorityInput.checked = false;
    }
    const repetInput = document.querySelector('input[name="Repet"]:checked');
    if (repetInput) {
        repetInput.checked = false;
    }
 }
 
 
 priorityButton.addEventListener('click', function () {
    priority();
 });
 
 
 CompletedButton.addEventListener('click', function () {
    completed();
 })
 pandingButton.addEventListener('click', function () {
    panding();
 });
 
 
 dueDateButton.addEventListener('click', function () {
    dueDate();
 });
 
 
 function dueDate() {
    tasklist = JSON.parse(localStorage.getItem("task"));
    let dueDates = tasklist.filter(function (task) {
    });
 }
 
 function priority(tasklist) {
    let highPriority = tasklist.filter(function (task) {
        return task.priority === "High";
    });
    displayTasks(highPriority);
 }
 
 
 function completed(tasklist) {
    let completedTask = tasklist.filter(function (task) {
        if (task.completed == true) {
            return task
        }
    });
    displayTasks(completedTask);
 }
 
 
 function panding(tasklist) {
    let pandingTask = tasklist.filter(function (task) {
        if (task.completed == false) {
            return task
        }
    });
    displayTasks(pandingTask);
 }
 
function dayWise(tasklist) {
    let todayDate = new Date();
    let today = todayDate.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayName = days[today]; 
    let todayTask = tasklist.filter(function (task) {
        if (task.repetDate === "Daily") {
            return true;
        }
        if (task.repetDate === "Weekends" && (today === 0 || today === 6)) {
            return true;
        }
        if (task.repetDate === "Weekdays" && today >= 1 && today <= 5) {
            return true;
        }
        if (task.repetDate === todayName) {  // Agar task me specific day likha ho
            return true;
        }
        return false;
    });
    console.log(todayTask);
    displayTasks(todayTask);
 }
 
