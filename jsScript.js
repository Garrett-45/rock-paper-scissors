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
        /* Compare human's input against computer's choice


        Possible outcomes are
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

        */

let playGame = function() {
    const userChoice = getUserChoice()
    const computerChoice = getComputerChoice()
        
    console.log("You picked " + userChoice)
    console.log("The computer chose " + computerChoice)

    if ((userChoice === "Rock") || (userChoice === "Scissors") || (userChoice === "Paper")) {

            if ((userChoice === "Paper") && (computerChoice === "Rock")) {
                console.log("You win!");
                return true;
        }   else if ((userChoice === "Rock") && (computerChoice === "Scissors")) {
                console.log("You win!");
                return true;                
        }   else if ((userChoice === "Scissors") && (computerChoice === "Paper")) {
                console.log("You win!");
                return true;
        }   else if (userChoice === computerChoice) {
                console.log("Tie! Play Again!")
                return null                               
        }   else {
                console.log("You lose!")
                return false                
        }
        }   else {
                console.log("Enter a valid input of rock, paper, or scissors")}
}



/* 

Create a game that goes through five rounds of RPS and picks a winner based on who won the majority of the games.

Use a variable that starts at zero to represent the amount of times the player has won and another for the computer.
If the playthrough returns a true value, increment the playerscore variable.
If the playthrough returns a false value, increment the computerscore variable
After each game, check if the player has a score of 3 or more.
If the player hits a score of 3, end the game and notify the player that they won.
If the computer hits a score of 3, end the game and notify the player that they lost. 
On the 5th game, check to see who has more points. If the player has more, tell them they win otherwise tell them they lost.

*/

const playRounds = function() {
        console.log("Play the best of five games of Rock, Paper, Scissors, with the computer!")
        let playerScore = 0
        let computerScore = 0

        
        if (playGame() == true) {
                ++playerScore
        } else {
                ++ computerScore
        }
        
        if (playGame() == true) {
                ++playerScore
        } else {
                ++ computerScore
        }
                
        if (playGame() == true) {
                ++playerScore
        } else {
                ++ computerScore
        }

        
        if (playGame() == true) {
                ++playerScore
        } else {
                ++ computerScore
        }
        
        if (playGame() == true) {
                ++playerScore
        } else {
                ++ computerScore
        }


        if (playerScore > computerScore) {
                return true
        } else if (computerScore > playerScore) {
                return false
        } else {
                return "tie"
        }

} 


playRounds()

if (playRounds === true) {
        console.log("You win!")
} else if (playRounds === false){
        console.log("You lose!")
} else {
        console.log("It's a tie!")
}




// getUserChoice()
// getComputerChoice()
