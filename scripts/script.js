randomWord()




let word = ''
let wrong = []
let correct = []
let gameOver = false

function refreshPage(){
    window.location.reload();
}

function randomWord() {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => response.json())
        .then(data => {
            word = data[0]
            gameOver = false
            wrong = []
            correct = []
            displaySecret()
            displayLetters()
            displayHint()
        })
}

function displaySecret() {
    let secret = ''
    for(let i = 0; i < word.length; i++) {
        if(correct.includes(word[i])) {
            secret += ' ' + word[i] + ' '
        }
        else {
            secret += ' _ '
        }
    }
    document.getElementById("secret-word").innerHTML = '<h2>' + secret + '</h2>'
    drawCanvas()
}

function displayLetters() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let letters = ''
    let counter = 0
    alphabet.forEach(ch => {
        let disabled = ''
        counter++
        if(gameOver || wrong.includes(ch) || correct.includes(ch)) {
            disabled = 'disabled'
        }
        letters += "<button onclick='playLetter( "+ ch.charCodeAt(0)+")' "
                + disabled + ">" + ch + "</button> "
    })
    document.getElementById("letters").innerHTML = letters
}

function displayHint() {
    let ctr =0
    const hint = document.querySelector(".hint")
    hint.innerHTML = "<button class='btnHint' onclick =getHint()>Hint</button>"
    const btn = document.querySelector(".btnHint")
    btn.addEventListener('click', (e)=>{
        ctr +=1
        console.log(ctr)
        if(ctr >= 3){
            btn.disabled = true;
            hint.innerHTML = hint.innerHTML + "<h2>You Used All The Hints!</h2>"
        }
        else{
            btn.disabled =false;
        }
    })
}

function getHint(){
    let hints =[]
    for(i = 0; i<word.length; i++){
        if(!correct.includes(word[i])){
            hints.push(word[i])
        }
    }
    const hintLetter = hints[Math.floor(Math.random()*hints.length)]
    playLetter(hintLetter.charCodeAt(0))
}
function checkWin() {
    if(wrong.length >= 10) {
        gameOver = true
        document.querySelector(".message").innerText = "You Lost"
        document.querySelector(".tryAgain").innerHTML ="<button onclick=refreshPage()>Play Again</button>"
    }
    else {
        for(let i = 0; i < word.length; i++) {
            let ch = word[i]
            if(!correct.includes(ch)) {
                return
            }
        }
        gameOver = true
        document.querySelector(".message").innerText = "You Won!"
        document.querySelector(".tryAgain").innerHTML ="<button onclick=refreshPage()>Play Again</button>"
    }
}

function playLetter(ch) {
    let trial = Number(document.querySelector('span').innerText)
    const letter = String.fromCharCode(ch)
    if(word.includes(letter)) {
        correct.push(letter)
    }
    else {
        wrong.push(letter)
        trial--
        document.querySelector("span").innerText = trial
    }
    checkWin()
    displaySecret()
    displayLetters()
    drawCanvas()
}

function drawCanvas() {
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const wrongLetters = wrong.length;

    switch (wrongLetters) {
        case 10:
            // Left leg
            context.beginPath();
            context.moveTo(66, 85);
            context.lineTo(52, 95);
            context.stroke();
        case 9:
            // Right leg
            context.beginPath();
            context.moveTo(66, 85);
            context.lineTo(80, 95);
            context.stroke();
        case 8:
            // Left hand
            context.beginPath();
            context.moveTo(66, 55);
            context.lineTo(52, 65);
            context.stroke();
        case 7:
            // Right hand
            context.beginPath();
            context.moveTo(66, 55);
            context.lineTo(80, 65);
            context.stroke();
        case 6:
            // Body
            context.beginPath();
            context.moveTo(66, 49);
            context.lineTo(66, 85);
            context.stroke();
        case 5:
            // Head
            context.beginPath();
            context.arc(66, 41, 8, 0, 2 * Math.PI);
            context.stroke();
        case 4:
            context.fillRect(64, 20, 3, 15);
        case 3:
            context.fillRect(20, 20, 50, 7);
        case 2:
            context.fillRect(20, 20, 7, 100);
        case 1:
            context.fillRect(10, 120, 100, 10);

    }
}
