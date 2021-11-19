//PROBLEM: Make a rock, paper, scissors game where user can input their own choice!
/*

*/


const getUserChoice = userInput =>  {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
        return userInput;
    }
    return "Not a valid input!";
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
    case 0:
        return "rock";
    break;
    case 1:
        return "paper";
    break;
    case 2:
        return "scissors";
    break;
    default:
        return "not valid.";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    //Cheat code so that the player always wins
    if(userChoice === "bomb"){
        return "The user wins!";
    }
    if(userChoice === computerChoice){
        return "The game was a tie!";
    }
    if(userChoice === "rock"){
        if(computerChoice === "paper"){
            return "The computer wins!";
        } else {
            return "The user wins!";
        }
    }
    if(userChoice === "paper"){
        if(computerChoice === "scissors"){
            return "The computer wins!";
        } else {
            return "The user wins!";
        }
    }
    if(userChoice === "scissors"){
        if(computerChoice === "rock"){
            return "The computer wins!";
        } else {
            return "The user wins!";
        }
    }
}

function playGame(){
    let userChoice = getUserChoice("BOMB");
    console.log("User choice: " + userChoice);
    
    let computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();