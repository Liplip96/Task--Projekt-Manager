//"use strict";

const todo_input = document.getElementById("todo_input");
const add_button = document.getElementById("add_button");
const todo_ul = document.getElementById("todo_ul");

add_button.addEventListener("click", () =>{
    const input = todo_input.value;
    const newTodo = document.createElement("li");
    newTodo.innerText = input;
    const delete_button = document.createElement("button");
    delete_button.innerText = "done";
    newTodo.appendChild(delete_button);
    todo_ul.appendChild(newTodo);


    delete_button.addEventListener("click",() =>{
        newTodo.remove();
    })
})