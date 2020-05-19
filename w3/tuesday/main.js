let tasks = [];
let currentOption = "ALL";

let addItem = () => {
    let inputBox = document.getElementById('input');
    let prioritySelector = document.getElementById('selectPriority')

    let value = inputBox.value;

    if (value == null || value.trim().length == 0) {
        return;
    }

    let priority = prioritySelector.value
    
    const myTask = {
        priority: priority,
        description: value, 
        isDone: false, 
        id: 1
    }

    if (tasks.length > 0) {
        myTask.id = tasks[tasks.length-1].id + 1;
    } 

    tasks.push(myTask);
    renderList(currentOption);

    //Reset the input
    inputBox.value = "";
}


let renderList= (option) => {
    document.getElementById("list").innerHTML = "";

    if (option == 'ALL') {
        tasks.map(x => addATaskToList(x));
    } else if (option == 'UNDONE') {
        tasks.filter(x => !x.isDone).map(t => addATaskToList(t));
    } else if (option == 'DONE') {
        tasks.filter(x => x.isDone).map(t => addATaskToList(t));
    }
}

let addATaskToList = (task) => {

    let value = task.description;
    //Create li item
    var li = document.createElement("LI");

    if (task.isDone) {
        console.log("isDone");
        li.innerHTML = `<div class="radio-status"><input type="radio" class="raido-input" checked onchange="onCheckBoxSelected(this);" id="${task.id}"></input>${value}<button onclick="removeItem(${task.id});">-</button></div>`;
    } else {
        li.innerHTML = `<div class="radio-status"><input type="radio" class="raido-input" onchange="onCheckBoxSelected(this);" id="${task.id}"></input>${value}</div>`;

    }
   
    //Append li to ul list
    document.getElementById("list").append(li);
}

let removeItem = (id) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].isDone = !tasks[i].isDone
            renderList(currentOption);
            break;
        }
    }
}

let onFilterSelected = (input) => {
    currentOption = input.value;
    renderList(currentOption);
}

let onCheckBoxSelected = (input) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == input.id) {
            tasks[i].isDone = !tasks[i].isDone
            renderList(currentOption);
            break;
        }
    }
}
