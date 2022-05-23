console.log(" Hello World");

alert("Das ist eine Warnung");

const divElement = document.getElementsByName("div-element");
console.log(divElement);

divElement.Element.textContent =" Das ist ein neuer Inhalt";

divElement.classList.add("test-classe");

function passwortSichtbarkeitUmschalten(eingabefeldId){
const passwortwortFeld = document.getElementById(eingabefeldId);
if(passwortwortFeld.type == "password"){
passwortwortFeld.type = "text";  
}else{
    passwortwortFeld.type = "password";
}
}