
const todo_input = document.getElementById("todo_input");
const add_button = document.getElementById("add_button");
const todo_ul = document.getElementById("todo_ul");
const notename_input = document.getElementById("Notename-input");
const noteTime_input = document.getElementById("datetime-input");

//Legt Datum,Name von Notiz und Inhalt in Tabelle "li" ab.
//fügt Entfernenbutton der angelegten Tabelle an.
add_button.addEventListener("click", () => {
    const tInput = noteTime_input.value;
    const nInput = notename_input.value;
    const input = todo_input.value;
    const newTodo = document.createElement("li");
    newTodo.innerText = tInput + "\n" + nInput + "\n" + input;
    const delete_button = document.createElement("button");
    delete_button.innerText = "done";
    newTodo.appendChild(delete_button);
    todo_ul.appendChild(newTodo);
    todo_input.value = "";

    delete_button.addEventListener("click", () => {
        newTodo.remove();
    });
});
//Durch "click" wird type von Passwort auf Text gewechselt.
divElement.classList.add("test-classe");

function passwortSichtbarkeitUmschalten(eingabefeldId) {
    const passwortFeld = document.getElementById(eingabefeldId);
    if (passwortFeld.type === "password") {
        passwortFeld.type = "text";
    } else {
        passwortFeld.type = "password";
    };
};




const login_name = document.getElementById("loginName");
const login_password = document.getElementById("passwort");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
    if (login_name == User || login_password == passwort) {
        loginButton.href = "ToDo_Notes.html";
        alert("Hallo User");
    }
    else {
        alert("wrong password ore username");
    }
});