let terminalInputValue;
let inputHistory = document.getElementById("inputHistory")
let terminal = document.getElementById("terminal")

let inicialText = `
Hey there, <span class="y">Greetings!</span> This is my portfolio page.<br>
You might consider typing the <span>-help</span> command.  <br>
`
callTypewriter(inicialText, 50)

function cleanInputHistory(){
    inputHistory.innerHTML = ""
}

function whoamiSecondPage(){
    cleanInputHistory()

    const p = document.createElement("div");
    inputHistory.appendChild(p);
    p.innerHTML = "Well, I'm one of those who believes in a continuous and permanent learning process."
    p.style.margin = "0.7vw";

    let allText = [
        "I'm always working on personal projects to keep myself sharp.",
        "Besides that, I am a motivated learner who loves what he does.",
        "At the moment, I have been focusing my energy on improving my skills in JavaScript and its respective frameworks, both for frontend and backend development.",
        "Additionally, I have also been paying special attention to learning PHP, already having developed my first projects with the language.",
        "<button class=\"paginationButtonLeft\" onclick=\"whoamiFirstPage()\"></button>"    
    ]

    let i = 0;
    const interval = setInterval(() => {

        const p = document.createElement("div");
        inputHistory.appendChild(p);
        p.innerHTML = allText[i];
        p.style.margin = "0.7vw";

        p.style.color = 'rgba(237, 234, 222, 0.05)';
        p.style.transition = 'color 1.0s ease';
    

        void p.offsetWidth;
    
        p.style.color = 'rgba(237, 234, 222, 1)'; 
        i++;

        if(i == allText.length){
            clearInterval(interval);
        };

    }, 700);
}

function whoamiFirstPage(){
    cleanInputHistory()

    const imgElement = document.createElement('img');
    imgElement.src = 'dd.png';
    imgElement.style.display = 'block';
    imgElement.style.margin = '1.3vw auto';
    imgElement.style.width = '13.2vw'; 
    imgElement.style.height = '13.2vw';
    imgElement.style.border = '0.3vw solid white' 
    imgElement.style.borderRadius = '50%';

    inputHistory.appendChild(imgElement)

    let allText = [
        "I'm Marcos, a software developer currently living in Hamburg, Germany.",
        "Altogether, I have accumulated over 3 years of experience in software development and code maintenance.",
        "<button class=\"paginationButtonRight\" onclick=\"whoamiSecondPage()\"></button>"    
    ]

    let i = 0;
    const interval = setInterval(() => {

        const p = document.createElement("div");
        inputHistory.appendChild(p);
        p.innerHTML = allText[i];
        p.style.margin = "0.7vw";

        p.style.color = 'rgba(237, 234, 222, 0.05)';
        p.style.transition = 'color 1.0s ease';
    

        void p.offsetWidth;
    
        p.style.color = 'rgba(237, 234, 222, 1)'; 
        i++;

        if(i == allText.length){
            clearInterval(interval);
        };

    }, 700);    
}

function callTypewriter(str, delayIncrement){
    const p = document.createElement("div");
    inputHistory.appendChild(p);
    let delay = 0;
    for (let i = 0; i < str.length; i++) {
    const substring1 = str.substring(0, i + 1);
    setTimeout(function () {
        p.innerHTML = substring1;
        p.style.margin = "0.9vw";
        scrollTerminalToBottom();
    }, delay);
    delay += delayIncrement; 
    }
}
       
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    generateCircles();
}

function generateCircles(){
    for(i=0; i<6;i++){
        fill(getRandomColor());
        noStroke()
        let circleMinSize = width* 0.035
        let circleMaxSize = width * 0.085
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

function showProjects(){
    cleanInputHistory()
    var myList = document.createElement('ul');

    var urls = ['https://github.com/MVAPereira/sortit', 'https://github.com/MVAPereira/listenUp', 'https://github.com/MVAPereira/portfolio'];
    var descriptions = ['<span class="pinkGlow">Sortit -> </span><span class="whiteGlow">a Google Chrome extension for displaying the GitHub PR page in an order other than the standard alphabetical one.</span>', '<span class="pinkGlow">ListenUp -> </span><span class="whiteGlow">a PHP project for language learning through listening practice.</span>', '<span class="pinkGlow">Portfolio -> </span><span class="whiteGlow">a console-like terminal built with pure JavaScript, HTML, and CSS.</span>'];

    urls.forEach(function(url, index) {

        var listItem = document.createElement('li');
        listItem.style.marginBottom = '2vw'; 

        var pairDiv = document.createElement('div');
        pairDiv.classList.add('button-description-pair');
        pairDiv.style.display = 'flex';
        pairDiv.style.alignItems = 'center'; 
        pairDiv.style.margin = '2vw'; 

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button'); 
        buttonContainer.style.marginRight = '2vw';

        var buttonLink = document.createElement('a');
        buttonLink.classList.add('button_project'); 
        buttonLink.setAttribute('href', url); 
        buttonLink.setAttribute('target', '_blank'); 

        buttonContainer.appendChild(buttonLink);

        var descriptionPara = document.createElement('p');
        descriptionPara.classList.add('button-description'); 
        descriptionPara.innerHTML = descriptions[index]; 

        pairDiv.appendChild(buttonContainer);
        pairDiv.appendChild(descriptionPara);


        listItem.appendChild(pairDiv);
        myList.appendChild(listItem);
    });

    // Append the list to the inputHistory element
    inputHistory.appendChild(myList);
    scrollTerminalToBottom()

}

function TerminalActions(text){
    if (text == "clear"){ 
        cleanInputHistory()
    }

    else if (text == "help"){
        let inicialText = 
        ` 
        <span class="goldenGlow"> -whoami      </span>You can get to know me a bit<br>
        <span class="goldenGlow"> -clear       </span>Well, guess what?<br>
        <span class="goldenGlow"> -projects    </span>Get the link of some of my projects :)<br>
        `
        callTypewriter(inicialText, 10)
    }

    else if (text == "whoami"){
        whoamiFirstPage()

    }

    else if(text == "projects"){
        showProjects()
    }

    else {

        let inicialText = 
        ` 
        <span class="red"> Sorry, but that's not a valid comand :(</span>
    
        `
        callTypewriter(inicialText, 10)

    }

}


