const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");
let todoList = JSON.parse(localStorage.getItem("todoList")) || []


window.addEventListener("load",()=> {
  
})
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
    createTodo(newTodo);
  }
});
const createTodo = (newTodo) => {
  const { id, completed, text } = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id", id);
  completed ? li.classList.add("checked") : "";
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.appendChild(icon);
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);
  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);
  todoUl.prepend(li);
};

todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.classList.contains("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
    todoList.forEach((todo) => {
      if (todo.id == idAttr) {
        todo.completed =!todo.completed;
      }
    });
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    todoList=todoList.filter((todo)=>todo.id != idAttr)




  } else {
    alert("other element click");
  }
});
