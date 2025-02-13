let taskList = JSON.parse(localStorage.getItem("task"));
if (taskList==null){
  taskList=[];
}else{
  taskList=JSON.parse(localStorage.getItem("task"));
}
let addbutton = document.getElementById("add");

document.getElementById("taskContainer").style.display = "none";
addbutton.addEventListener("click", function () {
  document.getElementById("taskContainer").style.display = "block";
  document.getElementById("empatyContainer").style.display = "none";
});
if (taskList.length >0){
  document.getElementById("filter").style.display = "block";
  document.getElementById("alltasks").style.display = "block";
  document.getElementById("empatyContainer").style.display = "none";
  }else{
  document.getElementById("empatyContainer").style.display = "block";
  }

let savebutton = document.getElementById("create");
savebutton.addEventListener("click", function () {
  let task = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    priority: document.querySelector('input[name="Priyority"]:checked')?.value || null,
    repeat: document.querySelector('input[name="Repet"]:checked')?.value || null,
  };
  let duplicate = false;
  taskList.forEach(function(element){
    if (element.title === task.title) {
      duplicate = true;
    }
  });
  if (task.title.trim() === "") {
    console.log("Make sure title is not empty");
  } else if (!task.priority) {
    console.log("Choose your priority");
  } else if (!task.repeat) {
    console.log("Choose the repeat option");
  } else if (duplicate) {
    console.log("Duplicate task found");
  } else {
    taskList.push(task);
    localStorage.setItem("task", JSON.stringify(taskList));
    console.log("Task added:", task);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.querySelectorAll('input[name="Priyority"]').forEach((radio) => (radio.checked = false));
    document.querySelectorAll('input[name="Repet"]').forEach((radio) => (radio.checked = false));
    document.getElementById("taskContainer").style.display = "none";
    alltasks();

  }
});
function alltasks(){
  let alltask=JSON.parse(localStorage.getItem("task"));
  alltask.forEach(function(task){
 let taskTitle = document.getElementById("taskTitle");
  let taskDescription = document.getElementById("taskDes");
  taskTitle.innerHTML = task.title;
  if (taskDescription==null){
    taskDescription.innerHTML = "No description";
  }else{
    taskDescription.innerHTML = task.description;
  }
  });
}
document.getElementById("emptyButton").addEventListener("click", function () {
document.getElementById("empatyContainer").style.display = "none";
  document.getElementById("taskContainer").style.display = "block";
});
 
if (taskList.length>0){
  alltasks();
}

let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function () {
  localStorage.removeItem("task");
  alltasks();
});