       let score = null;
        let answer= null;
        let choice= null;
  
    
   const init = () => {
        console.log('init');
    };


//console.log(words)
//element dom
score = document.querySelector('#score');
choice = document.querySelector('#choices');
answer = document.querySelector('#answer');
let wordMapping = [];
let scoreCount = 0;
let maxScore = 8;
// Pick word
const pickedWord = () =>{
    const randomIndex = getRandomInt(0,words.length -1);
    return words[randomIndex];
}
let choices = [];
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) +min
}
const grenerateChoices = () => {
    
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index))
    }
    return choices
}
const getchoicesMapping = (choices) => {
    const choiceMapping = choices.map((letter) => {
        //console.log(letter);
       return {
        letter,
        isChosen: false
       }
    })
    return choiceMapping;
}
const getWordMapping = (word) => {
    const wordArray = word.split('');
    //console.log('wordArray',wordArray);
    //console.log('word',word);
    const wordMapping = wordArray.map((letter, index) => {
        let isVisible = false;
        if(index === 0 || index == wordArray.length -1) {
            isVisible = true;
        }
        return {
            letter,
            isVisible
        }
    })
    return wordMapping;
}
const word = pickedWord();
//console.log(word)
wordMapping = getWordMapping(word)
//console.log(wordMapping)
//console.log('word', game.word);
choices = grenerateChoices();
// word mapping
// choices mapping
choiceMapping = getchoicesMapping(choices);
//console.log(choiceMapping)
// Generate choices
const displayChoices = (choiceMapping) =>{
    let isAllLettersFound = true;
   const choiciesHtml = choiceMapping.map((letterMapping)=> {
       if(!letterMapping.isChosen) {
           return `<li>${letterMapping.letter}</li>`
       } else {
           return `<li class="disabled">${letterMapping.letter}</li>`  
       }
   });
   //console.log('choiciesHtml',choiciesHtml)
   choice.querySelector('ul').innerHTML = choiciesHtml.join('');
}
const displayWorld = (wordMapping) => {
    const wordHtml = wordMapping.map(letterMapping => {
        if(letterMapping.isVisible) {
            return `<li>${letterMapping.letter}</li>` 
        } else {
            return `<li>_</li>`
        }
    });
    answer.querySelector('ul').innerHTML = wordHtml.join('');
}
// Display word
displayWorld(wordMapping);
// Display choices
displayChoices(choiceMapping);
// Display score
const displayScore = ()=> {
//game.score.innerHTML = ` Nombre de chances: ${scoreCount} / ${maxScore}`;
score.innerHTML = `<img src="./images/${scoreCount}.png" alt="hagnman">`;
}
const checkLetter = (letter)=> {
    //console.log(letter);
    let matchLettertoWord = false;
    let isAllLettersFound = true;
    //console.log('matchLettertoWord before loop', matchLettertoWord)
    wordMapping.forEach((letterMapping)=> {
        //console.log('letterMapping.letter',letterMapping);
        if(letterMapping.letter === letter) {
            letterMapping.isVisible = true;
            matchLettertoWord = true;
        }
        if(!letterMapping.isVisible) {
            isAllLettersFound = false;
        }
    });
    choiceMapping.forEach((letterMapping)=> {
        if(letterMapping.letter === letter) {
            letterMapping.isChosen = true;
        }
    })
    displayChoices(choiceMapping);
    if(matchLettertoWord) {
        displayWorld(wordMapping);
    } else {
        scoreCount++;
        displayScore();
    }
    if(scoreCount === maxScore) {
        answer.innerHTML = word;
        endGame();
    }
    if(isAllLettersFound)
    //('matchLettertoWord after loop', matchLettertoWord)
    console.log('isAllLettersFound',isAllLettersFound)
    const allChoices = document.querySelectorAll('.choice');
    //console.log(allChoices);
    if(isAllLettersFound === true) {
        winGame()
    }
    //winGame()ava
}
// Listen mouse events
choice.addEventListener('click', ({target})=> {
    if(target.matches('li')) {
        checkLetter(target.innerHTML)
    }
})
// listen keyboards events
document.addEventListener('keydown', (keyboardEvent)=> {
    const key = keyboardEvent.key.toLocaleUpperCase();
    //console.log(key.charCodeAt(key))
    const letter = String.fromCharCode(key);
    if (key.charCodeAt(key) >= 65 && key.charCodeAt(key)<= 90) {
        checkLetter(key);
    }
})
displayScore();
// en game :
const endGame = () => {
    document.querySelector('body').style.backgroundColor = 'rgb(66, 100, 179)';
    choice.innerHTML = `<h2 class="perdu">Vous avez perdu !</h2><a class="button"href="/game">Recommencer une partie</a>`
}
    const winGame = () => {
    const choices = document.querySelector('#choices')
    choice.innerHTML = `<h2 classe="gagne">Vous avez gagner, bravo !</h2><a class="button" href="/game">Recommencer une partie</a>`
  
}

// winner
// if score max : loseGame

window.addEventListener('load', () => {
    init();
});