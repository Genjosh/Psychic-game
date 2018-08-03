var winsTotal=0;
var lossesTotal=0;
var guessesLeft=0;
var guessesSf=[0];

userGuest.onkeyup= function(event) {
var userGuess=event.key;
var computerChoices=("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess === computerChoices)  {
    winsTotal++;
}
if(userGuess != computerChoices) {
    lossesTotal++;
}
    else if(guessesLeft++);

};

