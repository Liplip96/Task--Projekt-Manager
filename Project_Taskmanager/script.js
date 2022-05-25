
const todo_input = document.getElementById("todo_input");
const add_button = document.getElementById("add_button");
const todo_ul = document.getElementById("todo_ul");
const name_input = document.getElementById("Notename_input");
const time_input = document.getElementById("datetime");

add_button.addEventListener("click", () =>{

    const input = todo_input.value;
    const newTodo = document.createElement("li");
    newTodo.innerText = input;
    const delete_button = document.createElement("button");
    delete_button.innerText = "done";
    newTodo.appendChild(delete_button);
    todo_ul.appendChild(newTodo);
    todo_input.value = "";

    delete_button.addEventListener("click",() =>{
        newTodo.remove();
    });
});

divElement.classList.add("test-classe");

function passwortSichtbarkeitUmschalten(eingabefeldId) {
    const passwortFeld = document.getElementById(eingabefeldId);
    if (passwortFeld.type === "password") {
        passwortFeld.type = "text";
    } else {
        passwortFeld.type = "password";
    };
};

const login_name = document.getElementById(loginName);
const login_password = document.getElementById("passwort");



