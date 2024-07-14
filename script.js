const getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const getHumanChoice = () => {
    return prompt("Rock, Paper, or Scissors?");
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    /* checks all cases where given the player choice, a new
    switch case statement is opened to compare the choice
    of the computer to the user and give the proper response
    and add points to either player */

    const playRound = (humanChoice, computerChoice) => {
        switch(humanChoice.toLowerCase()) {
            case "rock":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        console.log("It's a tie!");
                        break;
                    case "paper":
                        console.log("You Lose! Paper beats Rock!");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("You Win! Rock beats Scissors!");
                        humanScore++;
                        break;
                }
            break;
            case "paper":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        console.log("You Win! Paper beats Rock!");
                        humanScore++;
                        break;
                    case "paper":
                        console.log("It's a tie!");
                        break;
                    case "scissors":
                        console.log("You Lose! Scissors beat Paper");
                        computerScore++;
                        break;
                }
            break;
            case "scissors":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        console.log("You Lose! Rock beats Scissors!");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("You Win! Scissors beats Paper!");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("It's a tie!");
                        break;
                }
        }
    }

    /* a while loop that runs for 5 rounds */

    let count = 0;
    
    while (count < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        count++;
    }
    if (humanScore === computerScore) {
        console.log("You Tied!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("Human wins!");
    }
}

playGame();

