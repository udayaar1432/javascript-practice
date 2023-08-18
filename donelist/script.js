// Get elements from the DOM
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Add event listener to the "Add" button
addButton.addEventListener("click", addTodo);

// Function to add a new todo item
function addTodo() {
    const task = todoInput.value;
    if (task.trim() === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${task}
        <button class="deleteButton">Delete</button>
    `;

    // Add event listener to the "Delete" button inside the new task
    const deleteButton = listItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", deleteTodo);

    todoList.appendChild(listItem);

    // Clear input fields
    todoInput.value = "";
}

// Function to delete a todo item
function deleteTodo(event) {
    const listItem = event.target.parentElement;
    todoList.removeChild(listItem);
}
