// Define the Array of Tasks:


let tasks = [
    {
        id: 1,
        description: 'Complete the project report',
        dueDate: '2023-10-15',
        status: 'in-progress'
    },
    {
        id: 2,
        description: 'Buy groceries',
        dueDate: '2023-10-10',
        status: 'pending'
    },
    {
        id: 3,
        description: 'Schedule a meeting with the team',
        dueDate: '2023-10-12',
        status: 'completed'
    },
    {
        id: 4,
        description: 'Pay utility bills',
        dueDate: '2023-10-11',
        status: 'pending'
    },
    {
        id: 5,
        description: 'Prepare presentation slides',
        dueDate: '2023-10-14',
        status: 'in-progress'
    }
];
// Create the Task Class:
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }
}

// Define the displayTasks Function:
function displayTasks() {
    tasks.forEach(function(task) {
        console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
}

//  Define the addTask Function:
function addTask(id, description, dueDate, status) {
    const task = new Task(id, description, dueDate, status);
    tasks.push(task);
}

// Define the updateTask Function:
function updateTask(id, status) {
    const task = tasks.find(function(task) {
        return task.id === id;
    });
    if (task) {
        task.status = status;
    }
}

// Update task status with map
function updateTaskWithMap(id, status) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            return new Task(task.id, task.description, task.dueDate, status);
        }
        return task;
    });
}

// Define the removeTask Function:
 
function removeTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });
}

displayTasks();