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

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    const btn = document.querySelectorAll('button');
    const div = document.querySelector('.results');
    const hScore = document.querySelector('.human');
    const cScore = document.querySelector('.computer');
    const startBtn = document.createElement('button');
    let winner = "";


    /* checks all cases where given the player choice, a new
    switch case statement is opened to compare the choice
    of the computer to the user and give the proper response
    and add points to either player */

    const playRound = (humanChoice, computerChoice) => {
        switch(humanChoice.toLowerCase()) {
            case "rock":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        div.textContent = "It's a Tie! Rock ties Rock";
                        break;
                    case "paper":
                        div.textContent = "You Lose! Paper beats Rock!";
                        computerScore++;
                        break;
                    case "scissors":
                        div.textContent = "You Win! Rock beats Scissors!" ;
                        humanScore++;
                        break;
                }
            break;
            case "paper":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        div.textContent = "You Win! Paper beats Rock!";
                        humanScore++;
                        break;
                    case "paper":
                        div.textContent = "It's a Tie! Paper ties Paper" ;
                        break;
                    case "scissors":
                        div.textContent = "You Lose! Scissors beat Paper";
                        computerScore++;
                        break;
                }
            break;
            case "scissors":
                switch(computerChoice.toLowerCase()) {
                    case "rock":
                        div.textContent = "You Lose! Rock beats Scissors!";
                        computerScore++;
                        break;
                    case "paper":
                        div.textContent = "You Win! Scissors beats Paper!";
                        humanScore++;
                        break;
                    case "scissors":
                        div.textContent = "It's a Tie! Scissors ties Scissors";
                        break;
                }
        }
    }

    btn.forEach((button) => {

        button.addEventListener('click', () => {
            const humanSelection = button.value;
            console.log(humanSelection);
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

            hScore.textContent = `Human Score: ${humanScore}`;
            cScore.textContent = `Computer Score: ${computerScore}`;
            
            if (humanScore === 5) {
                winner = "Human";
                endGame();
            } else if (computerScore === 5){
                winner = "Computer";
                endGame();
            }
        });
    });

    const container = document.querySelector('.container');

    const endGame = () => {
        container.innerHTML = `<h2>${winner} Wins!</h2>
        <p>Would you like to play again?</p>`;
        startBtn.classList.add('startBtn');
        startBtn.addEventListener('click', () => {
            container.innerHTML = `
            <div class="container">
            <div class="space">
                <span class="human">Human Score: 0</span>
                <span class="computer">Computer Score: 0</span>
            </div>
            <p>What will it be?</p>
            <div class="flex">
                <button value="rock">Rock 🪨</button>
                <button value="paper">Paper 📝</button>
                <button value="scissors">Scissors ✂</button>
            </div>
            <div class="results"></div>
            </div>`
            playGame();
        });
        startBtn.textContent = "Play Again";
        container.appendChild(startBtn);
    }
}

playGame();





