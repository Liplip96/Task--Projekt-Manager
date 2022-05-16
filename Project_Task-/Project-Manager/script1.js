console.log("Hallo");

const savebutton = document.getElementById("save-button");
const tableBody = document.getElementById("table-body");

savebutton.addEventListener ("click", savebutton);

const contentOne = document.getElementById("content");
const notenameInput = document.getElementById("Notename-input1");
const Note1 = document.getElementById("NoteBlock1");
const datetime1 = document.getElementById("datetime-input1");


function handleDelete(evt, parentElement) {
    tableBody.removeChild(parentElement);
}


function createNewNoteData(){
    const tableEntry = document.createElement("tr");
    tableEntry.classList.add("table-entry");
    const notename = notenameInput.value;
    const deathline = datetime1.calue;
    const content = contentOne.value;

    if (!validierung(notename, datetime1, content)) {
        return;
    }

    const cells = [
        createTableCell(notename, "data-Name"),
        createTableCell(deathline, "data-time"),
        createTableCell(content, "data-NoteText"),
        createDeleteButtonCell(tableEntry)
    ];

    for (const cell of cells) {
        tableEntry.appendChild(cell);
    }
    tableBody.appendChild(tableEntry);
  
};

function createTableCell(value, name) {
    const tablecell = document.createElement("td");
    tablecell.setAttribute(name, value);
    tablecell.textContent = value;
    return tablecell;
}

function validierung(notename, deathline, content) {
    if (!notename || !deathline || !content) {
        alert("Please fill out all input fields!");
        return false;
    }
    return true;
}


function enterNote(evt) {
    evt.preventDefault();
    createNewNoteData();
}



