let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const showWinner = (userWin) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win");
        msg.innerText = "You Win & Computer Lose";
        msg.style.backgroundColor = "lightgreen";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose & Computer Win")
        msg.innerText = "You Lose & Computer Win";
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Oops! Game got Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //computerchoice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});

