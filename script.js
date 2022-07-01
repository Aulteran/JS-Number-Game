//build random number for test condition
var randNum = Math.floor(Math.random() * 1000) + 1;
//test condition for randNum value as to user guess

//make enter key trigger button
// document.getElementById("userInput").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     document.write("buffelo ")
//     if (event.keyCode === 13) {
//         getNumber();
//     }
// });

var counter=0;
var highScore;
var counterCheck=1;

function getNumber(){
    var userInput = document.getElementById("userInput").value;
    var result;
    if(userInput == randNum){
        result = "You got it!";
       
    }
    else if(isNaN(userInput)){
        result = "Please enter a number";
    }
    else if(userInput > 1000){
        result = "Please enter a number less than 1000";
    }
    else if(userInput < 1){
        result = "Please enter a number greater than 1";
    }
    else if(userInput > randNum){
        result = "Too high";
    }
    else if(userInput < randNum){
        result = "Too low";
    }
    else {
        result = "error";
    }
    
    counter++;
    highScoreUpdater();
    attempts();

    document.getElementById("result").innerHTML = result;
    
}

function highScoreUpdater(){
    if(userInput == randNum){
        highScore = counter;
        document.getElementById("highscoreVar").innerHTML = highScore;
        
    }
}

function attempts(){
    
    if(userInput == randNum){
        counter = 0;
        randNum = Math.floor(Math.random() * 1000) + 1;
    }
    document.getElementById("attemptsVar").innerHTML = counter;
}