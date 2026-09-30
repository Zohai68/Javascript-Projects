const taskInput = document.getElementById("todo-input");

let addBtn = document.querySelector(".add-btn");
let todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
    if (taskInput.value == "") {
        alert("Please enter a task");
    }
    else {
        let taskValue = taskInput.value;
        let task = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.innerText = taskValue;

        let actions = document.createElement("div");
        actions.classList.add("todo-actions");

        let completeBtn = document.createElement("button");
        completeBtn.innerText = "✓";
        completeBtn.classList.add("complete-btn");

        completeBtn.addEventListener("click", () => {
            task.classList.toggle("completed");
        });


        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "✕";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            task.remove();
        })

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        task.appendChild(taskText);
        task.appendChild(actions);
        task.classList.add("todo-item");
        
        todoList.appendChild(task);
        taskInput.value = "";
        }
    }
);
