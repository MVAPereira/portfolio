let terminalInput;
let inputHistory = document.getElementById("inputHistory")


function myFunction(event){
    terminalInput = document.getElementById("terminalInput").value
    const p = document.createElement("p");
    p.textContent = terminalInput

    if(event.key == "Enter"){
        console.log(terminalInput)
  
        document.getElementById("terminalInput").value = ""
        inputHistory.appendChild(p)
    }
}