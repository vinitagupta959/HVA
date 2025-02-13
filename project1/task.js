let emptyContainer = document.getElementById("empatyContainer"); // Corrected name
let emptyAddbutton = document.getElementById("emptyButton");
let allTasks = document.getElementById("alltasks");
let taskAdding = document.getElementById("taskAdding");
let addTaskButton = document.getElementById("addTask");
let saveButton = document.getElementById("saveButton");
let mainContainer = document.getElementById("mainContainer");
let filterContainer = document.getElementById("filter");
let priorityButton = document.getElementById("priorityTasks");
let CompletedButton = document.getElementById("completedTasks");
let pandingButton = document.getElementById("pendingTasks");
let dueDateButton = document.getElementById("dueDate");
let okayButton = document.getElementById("Okay");
let alltaskButton = document.getElementById("alltask");
let cancleButton = document.getElementById('cancelButton');

let tasklist;
if (localStorage.getItem("task")) {
   tasklist = JSON.parse(localStorage.getItem("task")) || [];
   console.log(tasklist); // This should show an array, not a string
} else {
   tasklist = [];
}

// if task list have some task that show the all task
if (tasklist.length > 0) {
    console.log(tasklist);
    displayTasks(tasklist);
    allTasks.style.display = "block";
    filterContainer.style.display = "block";
 } else {
    emptyContainer.style.display = "block";
 };

emptyAddbutton.addEventListener('click', function () {
    taskAdding.style.display = "block";
    emptyContainer.style.display = "none";
    mainContainer.style.display = "none";
});
 
addTaskButton.addEventListener('click', function () {
    taskAdding.style.display = "block";
    const taskContainer = document.getElementById("alltasks");
    taskContainer.style.display = "none";
});

cancleButton.addEventListener('click', function () {
    taskAdding.style.display = "none";
});

saveButton.addEventListener('click', function () {
    let task = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        priority: selectPriority(),
        repetDate: selectDate(),
        completed: false
    };
    if (task.title.trim() == "") {
        alert('Title is required');
    }
    if (task.description.trim() == "") {
        task.description = "No description";
    }
    if (task.priority == null) {
        alert('Choose Priority');
    }
    if (task.repetDate == null) {
        alert('Choose Repeat');
    } else {
        tasklist.push(task);
        localStorage.setItem("task", JSON.stringify(tasklist));
        alert("task is added");
        resetcontainer();
        allTasks.style.display = "block"; // Make sure it's visible
        taskAdding.style.display = "none"; // Hide task adding form after save
        displayTasks(tasklist); // Call display tasks with updated tasklist
    }
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
        taskContainer.innerHTML += `
        <div class="task-card">
          <h2>${task.title}</h2>
          <p>${task.description}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <p><strong>Repeat:</strong> ${task.repetDate}</p>
          <button onclick="markAscompleted(${index})">Mark as completed</button>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
    });
}



function resetcontainer() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    const priorityInput = document.querySelector('input[name="priyority"]:checked');
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
});
pandingButton.addEventListener('click', function () {
    panding();
});

dueDateButton.addEventListener('click', function () {
    dueDate();
});

function priority() {
    let highPriority = tasklist.filter(function (task) {
        return task.priority === "High";
    });
    displayTasks(highPriority);
}

function completed() {
    let completedTask = tasklist.filter(function (task) {
        if (task.completed == true) {
            return task;
        }
    });
    displayTasks(completedTask);
}

function panding() {
    let pandingTask = tasklist.filter(function (task) {
        if (task.completed == false) {
            return task;
        }
    });
    displayTasks(pandingTask);
}

function dueDate() {
    tasklist = JSON.parse(localStorage.getItem("task"));
    let dueDates = tasklist.filter(function (task) {
        // Add logic to filter based on due date here
    });
}

function dayWise(tasklist) {
    let todayDate = new Date();
    let today = todayDate.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayName = days[today]; // Aaj ka din ka naam

    let todayTask = tasklist.filter(function (task) {
        if (task.repetDate === "Daily") {
            return true;
        }
        if (task.repetDate === "Weekend" && (today === 0 || today === 6)) {
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
