function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">
            ${taskText}
        </span>

        <button class="edit-btn"
                onclick="editTask(this)">
            Edit
        </button>

        <button class="delete-btn"
                onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}


function editTask(button) {

    let task = button.parentElement
                       .querySelector("span");

    let newTask = prompt("Edit your task:", task.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        task.innerText = newTask.trim();
    }
}


function deleteTask(button) {

    let task = button.parentElement;

    task.remove();
}


function completeTask(task) {

    task.classList.toggle("completed");
}