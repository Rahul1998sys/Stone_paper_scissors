let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");

const genCompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return compChoices[randomNum];
}

const drawGame = () => {
 //   console.log("Game Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#07040ca2";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScore_span.innerText = userScore;
        // console.log("You Win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("You Lose");
        compScore++;
        compScore_span.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
   // console.log("user choice", userChoice);
    const compChoice = genCompChoice();
   // console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else if(userChoice === "rock" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "paper" || userChoice === "paper" && compChoice === "rock"){
        // userScore++;
        showWinner(true);
    }
    else{
        // compScore++;
        showWinner(false);
    }
    // console.log("user score", userScore);
    // console.log("comp score", compScore);
}

// Event listeners

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})


