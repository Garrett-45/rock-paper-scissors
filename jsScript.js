



        //First need an input from the user choosing either rock, paper, or scissors
        //Make all inputs lowercase then change the first letter to capital so they can be compared equally

getUserChoice = function (){
    let userChoice = (prompt("Choose 'rock', 'paper', or 'scissors'.", undefined)).toLowerCase()
    userChoice = (userChoice.slice(0,1).toUpperCase() + userChoice.slice(1,))
    return userChoice
    console.log(userChoice)
}

        //Computer's choice needs to be generated after the human input choice is made
        //Create a function that randomly generates a number and assign 1/3 of the possible outcomes to each R/P/S choice

getComputerChoice = function() {
    let randomizer = Math.floor((Math.random() * 1000))
    let computerChoice = undefined

    if (randomizer <= 333) {
            return computerChoice = "Rock";
    }   else if (randomizer >= 666){
            return computerChoice = "Paper";
    }   else {
            return computerChoice = "Scissors";
    }

}


        //Compare human's input against computer's choice

let playGame = function() {
    let userChoice = undefined
    let computerChoice = undefined
    
    userChoice = getUserChoice()
    console.log("You picked " + userChoice)
    computerChoice = getComputerChoice()
    console.log("The computer chose " + computerChoice)

    if ((userChoice === "Rock") || (userChoice === "Scissors") || (userChoice === "Paper")) {

            if ((userChoice === "Paper") && (computerChoice === "Rock")) {
                console.log("You win!");
        }   else if ((userChoice === "Rock") && (computerChoice === "Scissors")) {
                console.log("You win!");
        }   else if ((userChoice === "Scissors") && (computerChoice === "Paper")) {
                console.log("You win!");
        }   else {
                console.log("You lose!")
        }
}   else {
        console.log("Enter a valid input of rock, paper, or scissors")
}
}

playGame()




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


// getUserChoice()
// getComputerChoice()
