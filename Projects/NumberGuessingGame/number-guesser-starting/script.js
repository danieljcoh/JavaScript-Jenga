let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 9);
}

//find whichever number is CLOSER to the secretNum
//...currently not working as intended...
function compareGuesses(humanGuess, compGuess, secretNum){
    if (humanGuess == secretNum){
        return true;
    } else if(humanGuess == compGuess && humanGuess == secretNum){
        return true;
    } else if(humanGuess != compGuess && humanGuess == secretNum){
        return true;
    } else if (humanGuess != secretNum && secretNum > humanGuess && humanGuess > compGuess){
        return true;
    } else if(humanGuess != secretNum && secretNum < humanGuess && humanGuess < compGuess) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner){
    if (winner === "computer") {
        computerScore++;
    } else if (winnner === "human"){
        humanScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}


