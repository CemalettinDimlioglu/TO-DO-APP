 const todoInput = document.getElementsById("todo-input");
 const addBtn = document.querySelector("#todo-button");
 const todoUl = document.querySelector("#todo-ul");

 addBtn.addEventListener("click",(e)=>{

  e.preventDefault();
  if(todoInput.value.trim()===""){
    alert("Please enter new todo text!")
  }
 })