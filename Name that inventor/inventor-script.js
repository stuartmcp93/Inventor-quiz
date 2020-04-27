

 //array of inventor images 
var inventorPicsArray = ["inventor-images/albert-einstein.jpg", 
"inventor-images/isaac-newton.jpg", 
"inventor-images/galileo-galilei.jpg",
"inventor-images/alexander-graham-bell.jpg",
"inventor-images/alfred-nobel.jpg",
"inventor-images/nikola-tesla.jpg",
"inventor-images/james-watt.jpg",
"inventor-images/johannes-kelper.jpg", 
"inventor-images/nicolaus-copernicus.jpg",
"inventor-images/max-planck.jpg",
"inventor-images/josephine-cochrane.jpg",
"inventor-images/maria-beasley.jpg",
"inventor-images/shirley-jackson.jpg",
"inventor-images/marie-curie.jpg", 
"inventor-images/katherine-blodgett.jpg",
"inventor-images/ada-lovelace.jpg", 
"inventor-images/sarah-e-goode.jpg",
"inventor-images/lise-meitner.jpg",
"inventor-images/hanna-hammarstrom.jpg"];
console.log(inventorPicsArray.length)
//object of invetor names to add to images and clues 
    const inventors = [{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955, gender: 'male',
    invented: "As a physicist, he had many discoveries, but this German is perhaps best known for his theory of relativity.",
},
      { first: 'Isaac', last: 'Newton', year: 1642, passed: 1727, gender: 'male',
      invented: "This English mathematician, physicist, astronomer, theologian, and author is widely recognised as a key figure in the scientific revolution.",
      },

      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642, gender: 'male', 
      invented: "An Italian astronomer, physicist and engineer, sometimes described as a polymath. He has been called the \"father of modern science\". ",
      },

      { first: 'Alexander', last: 'Graham Bell', year: 1847, passed: 1922, gender: 'male', 
      invented: "The world of communication technology owes everything to the Scottish-born scientist and inventor. He invented the microphone and the first acoustic telegraph, which is commonly known as telephone today. ",
      },

      { first: 'Alfred', last: 'Nobel', year: 1833, passed: 1896, gender: 'male', 
      invented: "The Swedish engineer, chemist, businessman, and philanthropist made it to the annals of history for inventing dynamite."
      },

      { first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943, gender: 'male', 
      invented: "Science has thanked him for the alternating current, remote controlled boats, the modern electric motor. He even tried to invent wireless electricity."
      },
      
      { first: 'James', last: 'Watt', year: 1736, passed: 1819, gender: 'male', 
      invented: "The Scottish inventor of steam engines, he gave a major fillip to mass transportation systems. Steam engines pulled trains in many countries as late as the 1980s. "
      },

      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630, gender: 'male',
      invented: "A German astronomer who was a key figure in the 17th-century scientific revolution, best known for his laws of planetary motion.",
     },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543, gender: 'male',
      invented: "A Renaissance-era polymath from Germany whose theory of the universe placed the Sun rather than Earth at the center of the universe.",
     },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947, gender: 'male',
      invented: "A German Nobel Prize winner in Physics, who made many contributions to theoretical physics, best known for his role as the originator of quantum theory.",
     },

     { first: 'Josephine', last: 'Cochrane', year: 1839, passed: 1913, gender: 'female',
      invented: "She was the first person to invent the commercially successful dishwasher. The American went to win the highest prize for mechanical craftsmanship, durability and adaptation in 1887. ",
     },

     { first: 'Maria', last: 'Beasley', year: 1847, passed: 1904, gender: 'female',
      invented: "She is best known for her barrel-making machines and her improvements to the life raft, and she held fifteen different patents in the United States and two in Great Britain.",
     },

     { first: 'Shirley', last: 'Jackson', year: 1946, passed: '~', gender: 'female',
      invented: "A theoretical physicist who was the first black woman to receive a Ph.D. from the Massachusetts Institute of Technology in 1973. She conducted breakthrough scientific research with subatomic particles.",
     },

     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934, gender: 'female',
      invented: "Born in Poland, this Physicist conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize.",
     },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979, gender: 'female',
      invented: "An American physicist and chemist known for her work on surface chemistry, in particular her invention of \"invisible\" or nonreflective glass while working at General Electric.",
     },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852, gender: 'female',
      invented: "She was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.",
     },
      { first: 'Sarah E', last: 'Goode', year: 1855, passed: 1905, gender: 'female',
      invented: "This entrepreneur and inventor was the first African-American woman to receive a United States patent, which she received in 1885.",
     },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968, gender: 'female',
      invented: "An Austrian-Swedish physicist who worked on radioactivity and nuclear physics. Part of a small group of scientists who first discovered nuclear fission of uranium when it absorbed an extra neutron.",
     },
      { first: 'Hanna', last: 'Hammarstrom', year: 1829, passed: 1909, gender: 'female',
      invented: "She was the first person in Sweden to produce telephone wires commercially.She manufactured the wires for the first Swedish telephone network.",
     }
    ];


///Getting males and females for options
const optionsMale = inventors.filter(i => {
    const males = i.gender === 'male'
    return males
})

const optionsFemale = inventors.filter(i => {
    const females = i.gender === 'female'
    return females
})
console.log(optionsMale, optionsFemale)



//selecting main elements
        let inventorImg = document.getElementById("inventor-img")
        let scoreDisplay = document.getElementsByClassName('.scores')
        const guessInput = document.getElementById('guess-input')
        const guessBtn = document.getElementById('guess-btn')
        let correctDisplay = document.getElementById('correct')
        let wrongDisplay = document.getElementById('wrong')
       const fullName = inventors.map(fullName => fullName.first + ' ' + fullName.last)
        const bio = document.getElementById('info-div')
        const h1 = document.querySelector('h1')
        const resetBtn = document.querySelector('#reset-button')
        const gameOverDiv = document.querySelectorAll('.game-over')
        const correctFinal = document.querySelector('#final-score-correct')
        const wrongFinal = document.querySelector('#final-score-wrong')
        const startButton = document.querySelector('.start')
        const optionA =  document.querySelector('#option-a')
        const optionB =  document.querySelector('#option-b')
        const optionC = document.querySelector('#option-c')
//Generate random pic with matching name for answer
    let usedImages = []
    let usedImagesCount = 0
    //Score variables 
     let correct = 0
     let wrong = 0

init()     

    function randomPic() {
        const randomNum = Math.floor(Math.random() * inventorPicsArray.length)
      if(!usedImages.includes(fullName[randomNum])){
            inventorImg.src = inventorPicsArray[randomNum]
            inventorImg.setAttribute("name", fullName[randomNum])
            usedImages.push(fullName[randomNum])
            usedImagesCount++
            displayBio(randomNum)
            displayOptions(randomNum)
            console.log(usedImages)
            if(usedImagesCount > 6){
                //alert('game over!')
                //Write a function for what happens when the game finsihes
                gameover() 
            
        }  
    } else {
       randomPic()
        }
}
    

    //Display info about the inventor > very repititive could maybe shorten with .filter()????
function displayBio (num){
    let born = inventors.map(born => born.year)
    document.querySelector('#born-text').textContent = ' ' + born[num]
    let died = inventors.map(d => d.passed)
    document.querySelector('#died-text').textContent = ' ' + died[num]
    let famousFor = inventors.map(f => f.invented)
    document.querySelector('#famous-text').textContent = ' ' + famousFor[num]
    displayOptions(num)

    /*let optionA = inventors.map(a => a.optionA)
    document.querySelector('#option-a').textContent = ' ' + optionA[num]
    let optionB = inventors.map(b => b.optionB)
    document.querySelector('#option-b').textContent = ' ' + optionB[num]
    let optionC = inventors.map(C => C.optionC)
    document.querySelector('#option-c').textContent = ' ' + optionC[num]*/
}
    

const displayOptions = (num) => {
    console.log('The number is...' + num)
const maleNames = optionsMale.map(fullName => fullName.first + ' ' + fullName.last) 
   const femaleNames = optionsFemale.map(fullName => fullName.first + ' ' + fullName.last)
 const wrongfiltered = (names) => {return names.filter(x => x != inventorImg.getAttribute('name'))}
const wrongFiltered2 = (names, w1) => { return names.filter(x => x != inventorImg.getAttribute('name') && x !== w1)}
 
if(inventors[num].gender === 'male'){ 
   const wrongMales = wrongfiltered(maleNames)
   const ranMale1 = wrongMales[Math.floor(Math.random()* wrongMales.length)]
    const wrongMales2 = wrongFiltered2(maleNames, ranMale1)
    const ranMale2 = wrongMales2[Math.floor(Math.random()* wrongMales2.length)]


    console.log('Wrong answer 1 is...' +  ranMale1, 'wrong answer 2 is ....' + ranMale2)
       if(num < 2){
            optionA.textContent = inventorImg.getAttribute('name')
            optionB.textContent = ranMale1
            optionC.textContent = ranMale2
            //if(ranMale1 !== inventorImg.getAttribute('name') && ranMale1 !== ranMale2) {optionB.textContent = ranMale1} else {optionB.textContent = randomMale1(maleNames) != inventorImg.getAttribute('name')}
            //if(ranMale2 !== ranMale1 && ranMale2 !== inventorImg.getAttribute('name')) {optionC.textContent = ranMale2} else {optionC.textContent = randomMale2(maleNames)}
       } if (num >= 3 && num < 6){
        optionB.textContent = inventorImg.getAttribute('name')
        optionA.textContent = ranMale1
        optionC.textContent = ranMale2
        //if(ranMale1 != inventorImg.getAttribute('name') && ranMale1 !== ranMale2) {optionA.textContent = ranMale1} //else {optionA.textContent = randomMale1(maleNames)}
       // if(ranMale2 != inventorImg.getAttribute('name') && ranMale2 != ranMale1) {optionC.textContent = ranMale2} //else {optionC.textContent = randomMale2(maleNames)}
       } if(num >= 6) {
        optionC.textContent = inventorImg.getAttribute('name')
        optionA.textContent = ranMale1
        optionB.textContent = ranMale2
        //if(ranMale1 != inventorImg.getAttribute('name')  && ranMale1 !== ranMale2) {optionA.textContent = ranMale1} //else {optionA.textContent = randomMale1(maleNames)}
        //if(ranMale2 != inventorImg.getAttribute('name') && ranMale2 != ranMale1) {optionB.textContent = ranMale2} else {optionB.textContent = randomMale2(maleNames) != inventorImg.getAttribute('name')}
       }

} 
if(inventors[num].gender === 'female'){
    const wrongFemales = wrongfiltered(femaleNames)
    const ranFemale1 = wrongFemales[Math.floor(Math.random()* wrongFemales.length)]
     const wrongFemales2 = wrongFiltered2(femaleNames, ranFemale1)
     const ranFemale2 = wrongFemales2[Math.floor(Math.random()* wrongFemales2.length)]
    
    console.log('Wrong answer 1 is...' +  ranFemale1, 'wrong answer 2 is ....' + ranFemale2)
       if(num >= 12 && num < 15){
            optionA.textContent = inventorImg.getAttribute('name')
            optionB.textContent = ranFemale1
            optionC.textContent = ranFemale2
           // if(ranFemale1 != inventorImg.getAttribute('name')) {optionB.textContent = ranFemale1} else {optionB.textContent = randomFemale1(femaleNames)}
           // if(ranFemale2 != inventorImg.getAttribute('name') && ranFemale2 != ranFemale1) {optionC.textContent = ranFemale2} else {optionC.textContent = randomFemale2(femaleNames)}
       } if (num >= 15 && num < 17){
        optionB.textContent = inventorImg.getAttribute('name')
        optionA.textContent = ranFemale1
        optionC.textContent = ranFemale2
        //if(ranFemale1 != inventorImg.getAttribute('name')) {optionA.textContent = ranFemale1} else {optionA.textContent = randomFemale1(femaleNames)}
        //if(ranFemale2 != inventorImg.getAttribute('name') && ranFemale2 != ranFemale1) {optionC.textContent = ranFemale2} else {optionC.textContent = randomFemale2(femaleNames)}
       } if(num >= 17) {
        optionC.textContent = inventorImg.getAttribute('name')
        optionA.textContent = ranFemale1
        optionB.textContent = ranFemale2
       // if(ranFemale1 != inventorImg.getAttribute('name')) {optionA.textContent = ranFemale1} else {optionA.textContent = randomFemale1(femaleNames)}
      //  if(ranFemale2 != inventorImg.getAttribute('name') && ranFemale2 != ranFemale1) {optionB.textContent = ranFemale2} else {optionB.textContent = randomFemale2(femaleNames)}
       }
}








}
//Start the game 
    startButton.addEventListener('click', gameStart)
     function gameStart (){
         guessInput.classList.add('show')
         guessBtn.classList.add('show')
         startButton.classList.add('hide')
         bio.classList.remove('hide')
         bio.classList.add('show')
         h1.classList.add('hide')
         resetBtn.classList.add('hide')
         randomPic()
         
     }

     //guessing function 
guessBtn.addEventListener('click', guessEntered)
//guessInput.addEventListener('keydown', enterPressed)
     

function guessEntered (){
    
    let userGuess = guessInput.value.toLowerCase()
    let correctAnswer = inventorImg.getAttribute('name').toLowerCase()
    if(!userGuess){
        alert('Please enter a guess!')
    }
        if(userGuess){
            console.log(userGuess + ' ' + correctAnswer)
            if(userGuess === correctAnswer){
                correct++
                //correctDisplay.textContent = 'Correct: ' + correct
                document.getElementById("guess-input").form.reset()
                randomPic()
            } else {
                wrong++
               // wrongDisplay.textContent = 'Wrong: ' + wrong
                document.getElementById("guess-input").form.reset()
                randomPic()
            }
        }
}
   /* 
 function enterPressed (e){
     if(e.keyCode == 13){
         guessEntered()

     }
 }  */



function gameover(){
    //Ideas: tell score, reset button

    //should make images disapear nad have div with text
    inventorImg.classList.add('hide')
    resetBtn.classList.remove('hide')
    correctFinal.textContent = correct
    wrongFinal.textContent = wrong
    guessBtn.classList.remove('show')
    guessInput.classList.remove('show')
    bio.classList.remove('show')
    bio.classList.add('hide')
    h1.textContent = "Game over!"
    h1.classList.remove('hide')
   // gameOverDiv.classList.remove('hide')
}

resetBtn.addEventListener('click', init)


function init(){
    inventorImg.src = "inventor-images/starter.jpg"
    inventorImg.classList.remove('hide')
    h1.textContent = "Can you name the inventor?"
    startButton.classList.remove('hide')
    bio.classList.add('hide')
    correct = 0
    wrong = 0
    resetBtn.classList.add('hide')
    usedImages =[]
    usedImagesCount = 0
    //gameOverDiv.classList.add('hide')
    
}

window.addEventListener('keydown', (e) => {
if(e.keyCode === 13){
    e.preventDefault()
}
})

    /*Next steps: 
                
                
               
                5 - add transitions/aniamtions to the images 
                and other styling
                5 - have easy and hard mode hide and display options could try and countdown for each one
                6 -try adding 'submit' to guess entered 
                - Automate the options section rather than me typing it (so could have 2 arrays(1 female, 1 male) it wil pick 3 names from each but must include 
                the answer which it can take from the img name)
                -Styling: background image (something science, animations for new images and game over!)
*/