const container  = document.getElementById("container");
const item = document.querySelector(".item")
const input = document.querySelector("#input")
const button = document.querySelector("#button")

button.addEventListener("click", (e)=>{
   if (input.value.trim()===""){
     alert("please enter new to do text!");
     return;
   }  
});