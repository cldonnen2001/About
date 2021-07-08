let rand = Math.floor(Math.random() * 100) + 1;
var turns = 5;


//this will print the guess you already made
var guesses = document.getElementById('yourGuesses');        
guesses.innerHTML = "";

//this will make the text print out instead of using alerts. 
var para = document.getElementById('output');

//guessing part
document.getElementById("submitGuess").onclick = function checkNumber(){
    
    var guess = document.getElementById("guessBox").value;
    guesses.innerHTML += guess + ",  "                                      //this will print the guess you already made

    if (guess == rand){
        para.innerText = ("Contratualations!");
        return;
    } else {
        turns--;
        if (guess < rand) {
            
            para.innerText = ("Too low, try again, you have remaining " + turns);
        } else if (guess > rand) {
            para.innerText =  ("Too high, one more time, you have remaining " + turns);
        }
    }
    if (turns==0){
        para.innerText =  ("Oop! Try again.");
    }
    
}

function startNewGame() {
    turns = 5;
    num = Math.floor(Math.random() * 100) + 1;
    checkNumber();
}


// timer 
const start = 10;
const tick = 1000; 
let count = start;
let timer_func = null;

function startTimer() {

       count = start;
    document.getElementById("clock").innerHTML = count;
    document.getElementById("startButton").disabled = true;
    timer_func = setInterval(countdown, tick);  
}

function countdown() {
    count--;
    document.getElementById("clock").innerHTML = count;
    if (count==0) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timer_func);  
    timer_func = null;
    document.getElementById("startButton").disabled = false;
}

function resetTimer(){
        running = 0;
        time = 0;
        clearInterval(timer_func);  
        timer_func = null;
        document.getElementById("startButton").disabled = false;
        document.getElementById("clock").innerHTML = "60";
}