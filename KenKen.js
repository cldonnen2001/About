'use strict';
let count = 0;
let button = document.getElementById('hint1');
let messages = ["Nope", "I don't think so", "Not happening", "Say again", "I don't think this means what you think it means", "Hint"];
function go(f){  //function can be go if individual button from fucntion go of btn1, if same js than need new name
    button.innerHTML = messages[count];
    if (count == messages.length -1){// has to have the -1 for the length in order to go thru all items in the array  
        count = 0 
    } 
    else{
        count++;
    } 
} button.addEventListener('click', go);

