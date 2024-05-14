let terminalInputValue;
let inputHistory = document.getElementById("inputHistory")
let terminal = document.getElementById("terminal")

// const arrayStry = [
// "Welcome to my portfolio page. Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "Hello, I'm a software developer!!",
// "try to write something funnnn"]


// arrayStry.forEach((str, index) => {
//     const p = document.createElement("div");
//     inputHistory.appendChild(p);
  
//     setTimeout(function () {
//       let delay = 0;
//       for (let i = 0; i < str.length; i++) {
//         const substring1 = str.substring(0, i + 1);
//         setTimeout(function () {
//           p.innerHTML = substring1;
//           scrollTerminalToBottom();
//         }, delay);
//         delay += 50; // Increase delay for each character
//       }
//     }, index * 3000); // Adjust the initial delay as needed
//   });

function paginationButton(){
    inputHistory.innerHTML = ""

    let allText = [
        "Lastly, I completed an internship at the University of Hamburg, where I primarily worked with JavaScript, allowing me to enhance my frontend development skills.",
        "In total, I have accumulated over 3 years of experience in software development and maintenance",
        "I am a motivated individual who believes that the learning process is continuous and eternal",
        "<button class=\"paginationButtonLeft\" onclick=\"createPagination()\"></button>"    
    ]

    let i = 0;
    const interval = setInterval(() => {

        const p = document.createElement("div");
        inputHistory.appendChild(p);
        p.innerHTML = allText[i];
        p.style.margin = "10px";

        p.style.color = 'rgba(237, 234, 222, 0.05)';
        p.style.transition = 'color 1.0s ease';
    

        void p.offsetWidth;
    
        p.style.color = 'rgba(237, 234, 222, 1)'; 
        i++;

        if(i == allText.length){
            clearInterval(interval);
        };

    }, 1000);
}

function createPagination(event){
    console.log(event)

    inputHistory.innerHTML = ""

    const imgElement = document.createElement('img');
    imgElement.src = 'dd.png';
    imgElement.style.display = 'block';
    imgElement.style.margin = '20px auto';
    imgElement.style.width = '13.2vw'; 
    imgElement.style.height = '13.2vw';
    imgElement.style.border = '0.3vw solid white' 
    imgElement.style.borderRadius = '50%';

    inputHistory.appendChild(imgElement)

    let allText = [
        "I'm Marcos, a software developer currently living in Hamburg, Germany.",
        "Altogether, I have accumulated over 3 years of experience in software development and code maintenance.",
        "<button class=\"paginationButtonRight\" onclick=\"paginationButton()\"></button>"    
    ]

    let i = 0;
    const interval = setInterval(() => {

        const p = document.createElement("div");
        inputHistory.appendChild(p);
        p.innerHTML = allText[i];
        p.style.margin = "10px";

        p.style.color = 'rgba(237, 234, 222, 0.05)';
        p.style.transition = 'color 1.0s ease';
    

        void p.offsetWidth;
    
        p.style.color = 'rgba(237, 234, 222, 1)'; 
        i++;

        if(i == allText.length){
            clearInterval(interval);
        };

    }, 1000);    
}

function callTypewriter(str, delayIncrement){
    const p = document.createElement("div");
    inputHistory.appendChild(p);
    let delay = 0;
    for (let i = 0; i < str.length; i++) {
    const substring1 = str.substring(0, i + 1);
    setTimeout(function () {
        p.innerHTML = substring1;
        p.style.margin = "10px";
        scrollTerminalToBottom();
    }, delay);
    delay += delayIncrement; 
    }
}
    
let inicialText = `
Hey there, <span class="y">Greetings!</span> This is my portfolio page.<br>
You might consider typing the <span>-help</span> command.  <br>
`
callTypewriter(inicialText, 50)

    
function getRandomColor() {

    const colors = [
      'rgba(255, 190, 11, 0.6)',  
      'rgba(251, 86, 7, 0.6)',   
      'rgba(255, 0, 110, 0.6)',  
      'rgba(265, 76, 93, 0.6)', 
      'rgba(58, 134, 255, 0.6)'  
    ];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateCircles(){
    for(i=0; i<6;i++){
        fill(getRandomColor());
        noStroke()
        let circleMinSize = width* 0.04
        let circleMaxSize = width * 0.07
        circle(random(width), random(height), random(circleMinSize, circleMaxSize))
    }
}

function setup() {
    background(0);
    let cnv = createCanvas(windowWidth, windowHeight)
    cnv.mouseMoved(generateCircles);
    for(i=0; i<150;i++){
        fill(getRandomColor());
        noStroke()
        let circleMinSize = Math.floor(width* 0.035)
        let circleMaxSize = Math.floor(width * 0.085)

        console.log(circleMaxSize, circleMinSize)
        circle(random(width), random(height), random(circleMinSize, circleMaxSize))
    }  
}

function draw() {
}

function handleTypedInput(event){

    terminalInputValue = document.getElementById("terminalInput").value
    const p = document.createElement("p");
    p.textContent = "C:\\Users\\mr.kurtz>" + terminalInputValue

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

    else if (text == "help"){
        let inicialText = 
        ` 
        <span class="goldenGlow"> -whoami      </span>You can get to know me a bit<br>
        <span class="goldenGlow"> -clear       </span>That one is quite obvious<br>
        <span class="goldenGlow"> -projects    </span>Get the link of some of my projects :)<br>
        `
        callTypewriter(inicialText, 10)
    }

    else if (text == "whoami"){
        createPagination(event.key)

    }

    else {

        let inicialText = 
        ` 
        <span class="red"> Sorry, but that's not a valid comand :(</span>
    
        `
        callTypewriter(inicialText, 10)

    }

}


