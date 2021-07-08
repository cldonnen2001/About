let rand = Math.floor(Math.random() * 100) + 1;
var turns = 5;


//this will print the guess you already made
var guesses = document.getElementById('yourGuesses');        
guesses.innerHTML = "";

//this will make the text print out instead of using alerts. 
var para = document.getElementById('output');


//directions for audio and delay in innertext popping 


function play(){                    //this plays my audio, whoot whoot
var audio = document.getElementById('audio');
audio.play();
};

var delay = 5000;               //delays this six seconds after I open page
setTimeout(delay)              //delays this to post after audio!!
function pick() {
    var para = document.getElementById('output3');
    para.innerText = ("Pick a Number 1 - 100, remember to click the timer below, and submit your guesses.");
};



//guessing part
document.getElementById("submitGuess").onclick = function checkNumber(){
    
    
    var guess = document.getElementById("guessBox").value;
    guesses.innerHTML += guess + ",  "                                      //this will print the guess you already made

    if (guess == rand){
        para.innerText = ("Inconceivable!");  //movie Princess Bride
        return;
    } else {
        turns--;
        if (guess < rand) {
            para.innerText = ("Too low, You guessed wrong." + turns);   // movie Princess Bride
        } else if (guess > rand) {
            para.innerText =  ("Too high, You guessed wrong " + turns); //movie Princess Bride
        }
    }
    if (turns==0){
        para.innerText =  ("You mean you wish to surrender to me? Very well, I accept.");  ///movie Princess Bride       //movie Princess Bride
    }
}

function startNewGame() {
    turns = 5;
    num = Math.floor(Math.random() * 100) + 1;
    checkNumber();
}


// timer 
const start = 60;
const tick = 1000; 
let count = start;
let timer_func = null;
var paras = document.getElementById('output2');

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
        paras.innerText =  ("Times up! " + " Never go in against a Sicilian when death is on the line!"); 
        
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


