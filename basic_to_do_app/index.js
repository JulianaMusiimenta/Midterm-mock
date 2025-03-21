let tasks = [];
function addtask() {
    let tasktext = document.getElementById("input").value.trim();
    if (!tasktext) {alert("please enter task!");return;}

    tasks.push(tasktext);
    document.getElementById("input").value = "";
    displaytask();
}


function displaytask() {
    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li"); 
        li.textContent = task;
        li.classList.add("taskitem");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deletetask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
function deletetask(index) {
    tasks.splice(index, 1);
    displaytask();
}