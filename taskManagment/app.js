 let emptyContainer=document.getElementById('emptyContainer');
 let emptyAddbutton=document.getElementById('emptyButton');
 let taskAddingContainer=document.getElementById('taskAdding');
 let title=document.getElementById('title');
 let description=document.getElementById('description');
 let saveButton=document.getElementById('saveButton');
 let updateButton=document.getElementById('updateButton');
  let cancelButton=document.getElementById('cancelButton');
  let alltaskContainer=document.getElementById('alltasks');
  let filterContainer=document.getElementById('filter');
  let addTaskButton=document.getElementById('addTask');
  let noTaskContainer=document.getElementById('noTaskContainer');
  

// initilise taskList array else we get localStorage
let taskList;
if(localStorage.getItem('taskList')==null){
    taskList=[];
     
}else{
    taskList=JSON.parse(localStorage.getItem('taskList'));
    console.log(taskList);

}
taskShow();
function taskShow(){
    if (taskList.length>0){
        taskview();
        filterContainer.style.display="block";
    }
    else{
        emptyContainer.style.display="block"
    }
}

function taskview(){
    if (4>taskList.length){
        displayTasks(taskList);
    }else{
        daywise();
    }
}

emptyAddbutton.addEventListener('click',function(){
    emptyContainer.style.display='none';
    taskAddingContainer.style.display='block';
});

cancelButton.addEventListener('click',function(){
    taskAddingContainer.style.display='none';
    resetContainer();
    taskShow();
});



addTaskButton.addEventListener('click',function(){
    taskAddingContainer.style.display='block';
    saveButton.style.display="block";
    updateButton.style.display="none"
    alltaskContainer.style.display="none"
})




// save button click event when we  click in save button in taskAddingContainer
saveButton.addEventListener('click',function(){
let titleValue=title.value.trim();
let descriptionValue=description.value.trim();
let priorityValue=selectPriority();
let repeatValue=selectRepeat();
let dueDateValue=takeCustomdate();


// validation
if (titleValue==''){
    alert('Please enter title');
    return;
}

//if title is exist in taskList
for(let i=0;i<taskList.length;i++){
    if(taskList[i].title==titleValue){
        alert('Title is already exist');
        return;
    }
}

if (descriptionValue==""){
    descriptionValue="No Description"
}
if (priorityValue==undefined){
    alert('Please select priority');
    return;
}
 
if (repeatValue == undefined && dueDateValue == "") {
    alert('Please select either Repeat or Due Date');
    return;
}

// creating object of task
let task={
    title:titleValue,
    description:descriptionValue,
    priority:priorityValue,
    repeat:repeatValue,
    dueDate:dueDateValue,
    completed:false
};

// adding task to taskList
taskList.push(task);
localStorage.setItem('taskList',JSON.stringify(taskList));
emptyContainer.style.display='none';
taskAddingContainer.style.display='none';
filterContainer.style.display="block"
alert('Task is added');
console.log(taskList);
displayTasks(taskList);
resetContainer();

});


function selectPriority(){
    let priority=document.getElementsByName('priority');
    for(let i=0;i<priority.length;i++){
        if(priority[i].checked){
            return priority[i].value;
        }
    }
}

function selectRepeat(){
    let repeat=document.getElementsByName('repeat');
    for(let i=0;i<repeat.length;i++){
        if(repeat[i].checked){
            return repeat[i].value;
        }
    }
}

 

// take custom date
   
function takeCustomdate() {
    console.log("vini");
    let dateInput = document.getElementById('customDate').value;
    console.log(dateInput);
    
    let selectedDate = new Date(dateInput);
    let today = new Date();
    if (selectedDate < today) {
        alert('Please select a valid future date');
        dateInput.value = ""; 
        return;
    }else{
        return selectedDate;
    }
}

// DISPLAY TASKS
function displayTasks(taskList){
alltaskContainer.style.display='block';
alltaskContainer.innerHTML="";

for (let i=0; i<taskList.length; i++){
    let task=taskList[i]
    let taskClass="";
    let buttonTxt="";

    // change the txt or className
    if (task.completed){
        taskClass="completedTask";
        buttonTxt="Completed"
    }else{
        taskClass="complete-btn"
        buttonTxt="Mark as Completed"
    }
   let repeatTxt="";
   let repeatValue;
    if (task.repeat==""){
        repeatTxt="Due Date";
        repeatValue=task.dueDate;
    }else{
        repeatTxt="Repeat";
        repeatValue=task.repeat;
    }
 
alltaskContainer.innerHTML+=`
 <div class="taskItem">
 <h2 id="taskTitle">${task.title}</h2>
 <p id="taskDescription" class="task-desc">${task.description}</p>
 <p"><strong>Priority : </strong>${task.priority}</p>
 <p"><strong>${repeatTxt} : </strong>${repeatValue}</p>
 <div id=buttons>
 <button class="${taskClass}" onclick="completeTask(${i})">${buttonTxt}</button>
 <button class="edit-btn" onclick="editTask(${i})">Edit</button>
 <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
 </div>
</div>
`
}
}


// Complete button functiont
function completeTask(index){
    if (taskList[index]){
    taskList[index].completed=true;
    console.log(taskList[index].completed);
     localStorage.setItem('taskList',JSON.stringify(taskList));
   displayTasks(taskList);
    }
}


// Edit task function
function editTask(index){
    let task=taskList[index];
    // give task value which is alady givee for edit

    title.value=task.title;
    description.value=task.description;
    
    let priority=document.getElementsByName('priority');
    for(let i=0; i<priority.length; i++){
        if(priority[i].value==task.priority){
            priority[i].checked=true;
        }
    }

    let repeat=document.getElementsByName('repeat');
    for (let i=0; i<repeat.length; i++){
        if (repeat[i].value==task.repeat){
            repeat[i].checked=true;
        }
    }
updateButton.style.display="block";
updateButton.onclick=function(){
    updateTask(index);
}
   
taskAddingContainer.style.display="Block"
saveButton.style.display="none"
alltaskContainer.style.display="none"
taskAddingContainer.appendChild(updateButton);
 

}


function updateTask(index){
    let task=taskList[index];
    task.title=title.value;
    task.description=description.value;
    task.priority=selectPriority();
    if (task.priority=='Custom'){
        repeatValue=takeCustomdate();
    }
    task.repeat=selectRepeat();
    localStorage.setItem("task",JSON.stringify(taskList));
    taskAddingContainer.style.display="none";
    alltaskContainer.style.display="block";
    displayTasks(taskList);
    console.log(task);
    saveButton.style.display="block";
    updateButton.style.display = "none"; 
    resetContainer();
}

// Delete Button function
function deleteTask(index){
    taskList.splice(index,1);    // splice method allow to remove and add the element in array.  isme hum jo index hai vha se only ek hi elemet remove kar rhe hai means only vhi item if agr hum vha 3 likhte to index se do element
    localStorage.setItem('taskList',JSON.stringify(taskList));
    console.log(taskList);
    if (taskList.length === 0) {
        emptyContainer.style.display = "block";
        filterContainer.style.display = "none";
        alltaskContainer.style.display = "none";
    } else {
        displayTasks(taskList);
    }
}





// filter feture.
let priorityButton=document.getElementById('priority');
let completedButton=document.getElementById('completed');
let pendingButton=document.getElementById('pending');
let dueDateButton=document.getElementById('dueDate');
let alltaskButton=document.getElementById('alltask');

priorityButton.addEventListener('click', function(){
    priorityTask();
})

completedButton.addEventListener('click',function(){
    completedTasks();
});

pendingButton.addEventListener('click', function(){
    pendingTask();
});
dueDateButton.addEventListener('click',function(){
    dueDateTask();
});
alltaskButton.addEventListener('click',function(){
    allTaskFilter();
});

 function priorityTask(){
    let byPriority=[];
    byPriority=taskList.filter(function(task){
        if (task.priority==="High" && task.completed==false){
            return task
        }
    });
    for(let i=0 ;i<taskList.length; i++){
        if (taskList[i].priority==="Medium" && taskList[i].completed==false){
            byPriority.push(taskList[i]);
        }
    }

    for(let j=0; j<taskList.length; j++){
        if (taskList[j].priority==="Low" && taskList[j].completed==false){
            byPriority.push(taskList[j]);
        }
    }

    if (byPriority.length>0){
        displayTasks(byPriority);
        noTaskContainer.style.display="none";
        }else{
             noTaskContainer.style.display="block";
        alltaskContainer.style.display="none"
            alert('No task'); 
        }
    taskAddingContainer.style.display="none";
 };

 function completedTasks(){
    let complete=[];
    complete=taskList.filter(function(task){
      if (task.completed){
         return task
      }
    })
    if (complete.length>0){
        displayTasks(complete);
        noTaskContainer.style.display="none";
        }else{
             noTaskContainer.style.display="block";
        alltaskContainer.style.display="none"
            alert('No task'); 
        }
        taskAddingContainer.style.display="none";
 };

 function pendingTask(){
    let pending=[];
    pending=taskList.filter(function(task){
        if(!task.completed){
            return task
        }
    })
    if (pending.length>0){
    displayTasks(pending);
    noTaskContainer.style.display="none";
    }else{
         noTaskContainer.style.display="block";
        alltaskContainer.style.display="none"
        alert('No task');
       
    }
    taskAddingContainer.style.display="none";
 };

 function dueDateTask(){
    let dueDate=[];
    dueDate=taskList.filter(function(task){
        let value=task.repeat;
        if (value!=="Daily" && value!=="Weekly" && value!=="Weekend"){
            return task
        } 
    });
    dueDate.sort(function(a, b) {
        let dateA = new Date(a.repeat); 
        let dateB = new Date(b.repeat); 

         
        return dateA - dateB;  
    });
     
    if (dueDate.length>0){
        displayTasks(dueDate);
        noTaskContainer.style.display="none";
        }else{
             noTaskContainer.style.display="block";
        alltaskContainer.style.display="none"
            alert('No task'); 
        }
        taskAddingContainer.style.display="none";
 }

 function allTaskFilter(){
    displayTasks(taskList);
    taskAddingContainer.style.display="none";
 }





// Day  wise task
function daywise(){
    let todayTask=[];
    let today=new Date().toDateString();
    let day=new Date().getDay();
    let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Weekend=["Saturday","Sunday"];

    for (let i=0; i<taskList.length; i++){
        if(taskList[i].repeat=="Daily"){
            todayTask.push(taskList[i])
        }else if(taskList[i].repeat==today){
            todayTask.push(taskList[i]);
        }else if(taskList[i].repeat=="Weekdays"){
             if (day<6 || day>0){
                todayTask.push(taskList[i]);
             }
        }else if(taskList[i].repeat=="Weekend"){
             if (day==6 || day==0){
                todayTask.push(taskList[i]);
             };
        
     }
    }
    console.log("dfkh",todayTask);
    displayTasks(todayTask)
    
}

 

//  reset container for input filed
 function resetContainer() {
    title.value = "";
    description.value = "";
    
    
    let priority = document.getElementsByName('priority');
    for (let i = 0; i < priority.length; i++) {
        priority[i].checked = false;
    }

    let repeat=document.getElementsByName('repeat');
    for(let i=0;i<repeat.length;i++){
        repeat[i].checked=false
    }
 }