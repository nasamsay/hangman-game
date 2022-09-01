const LETTER = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]
let div1 = document.createElement('div')
div1.className = 'alphabet'
let alphabet = function() {
    for (let i = 0; i < LETTER.length; i++) {
        let btn = document.createElement('button')
        btn.className = 'button'
        btn.innerHTML = LETTER[i]
        div1.appendChild(btn)
        document.body.append(div1)
    }
}
alphabet()
const words = {
    FootballTeams: [
        'everton',
        'liverpool',
        'swansea',
        'chelsea',
        'hull',
        'manchester-city',
        'newcastle-united',
    ],
    films: ['alien', 'dirty-harry', 'gladiator', 'finding-nemo', 'jaws'],
    cities: ['manchester', 'milan', 'madrid', 'amsterdam', 'prague'],
}
let allKeys = Object.keys(words)
    // console.log(allKeys)
let randomPropNumber = Math.floor(Math.random() * allKeys.length)
    // console.log(randomPropNumber)
let randomPropName = allKeys[randomPropNumber]
    // console.log(randomPropName);
let randomPropValue = words[randomPropName]
    // console.log(randomPropValue)
let randomValueNumber = Math.floor(Math.random() * allKeys.length)
let randomValue = randomPropValue[randomValueNumber]
    // console.log(randomValue)
    // let div2 = document.createElement("div");
    // let p = document.createElement("p")
    // let span = document.createElement("span")
    // let pText = document.createTextNode("The Chosen Category Is");
    // span.innerText = randomPropName;
    // p.append(span)
    // span.append(pText);
    // div2.append(p);
    // div2.className = "categories"
    // document.body.appendChild(div2);
let div2 = document.createElement('div')
div2.className = 'show'
let p = document.createElement('p')
let span = document.createElement('span')
div2.append(p)
div2.append(span)
let pText = document.createTextNode('The Chosen Category Is')
p.append(pText)
span.innerText = randomPropName
document.body.appendChild(div2)
    //HANGMAN DRAWINGS
const canvass = document.createElement('canvas')
document.body.appendChild(canvass)
drawCanvas()

function drawCanvas() {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')
    context.fillStyle = '#001858'

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillRect(10, 140, 100, 10)

    context.fillRect(20, 20, 7, 200)

    context.fillRect(20, 20, 50, 7)

    context.fillRect(20, 20, 50, 7)

    context.fillRect(64, 20, 3, 15)

    // let wrongLetters = wrong.length

    // switch (wrongLetters) {
    //     case 6:
    //         // Left leg
    //         context.beginPath()
    //         context.moveTo(66, 85)
    //         context.lineTo(52, 95)
    //         context.stroke()
    //     case 5:
    //         // Right leg
    //         context.beginPath()
    //         context.moveTo(66, 85)
    //         context.lineTo(80, 95)
    //         context.stroke()
    //     case 4:
    //         // Left hand
    //         context.beginPath()
    //         context.moveTo(66, 55)
    //         context.lineTo(52, 65)
    //         context.stroke()
    //     case 3:
    //         // Right hand
    //         context.beginPath()
    //         context.moveTo(66, 55)
    //         context.lineTo(80, 65)
    //         context.stroke()
    //     case 2:
    //         // Body
    //         context.beginPath()
    //         context.moveTo(66, 49)
    //         context.lineTo(66, 85)
    //         context.stroke()
    //     case 1:
    //         // Head
    //         context.beginPath()
    //         context.arc(66, 41, 8, 0, 2 * Math.PI)
    //         context.stroke()
    //}
}