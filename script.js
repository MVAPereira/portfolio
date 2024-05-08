let terminalInputValue;
let inputHistory = document.getElementById("inputHistory")
let terminal = document.getElementById("terminal")

const p = document.createElement("p");

// const arrayStry = ["Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",

// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",

// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",

// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",

// ]

// arrayStry.forEach((str, index)  => {
    
//     setTimeout(function(){
//         const p = document.createElement("p");
//         inputHistory.appendChild(p)
        
//         for (let i = 0; i < str.length; i++) {
//             const substring1 = str.substring(0, i+1);
//             setTimeout(function(){
//                 p.textContent = substring1
//                 scrollTerminalToBottom()
//             }, i * 7); 
//         }
//     }, index * (str.length * 7))

// });



function myFunction(event){
    terminalInputValue = document.getElementById("terminalInput").value
    const p = document.createElement("p");
    p.textContent = "C:\\Users\\marcos>" + terminalInputValue

    if(event.key == "Enter"){
  
        document.getElementById("terminalInput").value = ""
        inputHistory.appendChild(p)

        scrollTerminalToBottom()
        TerminalActions(terminalInputValue)
        
    }
}

function scrollTerminalToBottom(){
    terminal.scrollTop = terminal.scrollHeight;
}

function TerminalActions(text){
    if (text == "clear"){ 
       inputHistory.innerHTML = ""
    }

}

