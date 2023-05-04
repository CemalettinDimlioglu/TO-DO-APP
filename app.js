const todoInput = document.getElementsById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");
let todoList =[];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo text!");
    return;
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    todoList.push(newTodo);

  }
});
