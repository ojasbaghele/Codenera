//? SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//? EVENT LISTENERS
todoButton.addEventListener('click',addTodo)

//? FUNCTIONS
function addTodo(event) {
    //! Prevent Form submission
    event.preventDefault();
    //* Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //* Creaate LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //* Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //* Check Mark Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    
    //* Append To Do List
    todoList.appendChild(todoDiv);
}