Exercise Deja Vu:
Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable:

let rand = 7;
OR
let rand = Math.floor(Math.random() * 100) + 1;
Use `prompt()` to ask the user to input a number, and store the result in a variable
Create an if-statement that if the guessed number is below the initial value, print out “too low”.
Create an else-if statement that if the number is higher than the initial value, print out “too high”.
Create an else statement that prints out “Congratulations!!!”.

Wait.. We already did this. Yes! But this isn’t as good as it could be. We need to make this number guessing game playable until the user guesses the correct number.

WAIT.. Deja Vu! Now that we have some experience with DOM manipulation and Events, the user should be able to play your game all from their screen (html document).

Repo Example: Number Guessing Game

Rewrite your game functionality (you know it at this point, right??)
In your HTML file, create at least:
An input for user guesses
An element for feedback
An element displaying number of guesses
An element displaying a clock with the duration of their game
A button to guess again
A button to reset / quit playing
Style it up. It should work. Then it should look good. 
Bonus:
Only give the user a finite number of attempts
The feedback should dynamically generate current probabilities for their guessing, depending on the attempt number they are on
Display their previous guesses, with color coordination of too high vs too low
Bonus x 2:
Allow the user to choose the range (within reason)
Your number of guesses should dynamically generate based on the range
So should the probability
