

function getComputerChoice(){}

//First need an input from the user choosing either rock, paper, or scissors

//Computer's choice needs to be generated after the human input choice is made
    //Create a function that randomly generates a number and assign 1/3 of the possible outcomes to each R/P/S choice

//Make all inputs lowercase then change the first letter to capital so they can be compared equally
//Compare human's input against computer's choice

/*Possible outcomes are
    if user's choice does not equal rock, or paper, or scissors
        Output message that user must choose a valid response including no punctuation or extra spaces

    if user's choice === computer's choice
        Output message about a tie
        Start game over

    if user's choice is 'paper' and computer's choice is 'rock'
        Output message about user's victory
        Start game over

    if user's choice is 'rock' and computer's choice is 'scissors'
        Output message about user's victory
        Start game over
    
    if user's choice is 'scissors' and computer's choice is 'paper'
        Output message about user's victory
        Start game over

    
    In all other situations
        Output message about user's loss
        Start game over

Make a game
*/


getUserChoice = function (){
    let userChoice = (prompt("Choose 'rock', 'paper', or 'scissors'.", undefined)).toLowerCase()
    userChoice = (userChoice.slice(0,1).toUpperCase() + userChoice.slice(1,))
    console.log(userChoice)
}

getUserChoice()

