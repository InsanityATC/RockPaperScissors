let gameLoop = 1;
while(gameLoop <= 5)
{
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    //computerChoice is outputting as undefined

    if (playerChoice === "rock" && computerChoice === "rock")
    {
        console.log("Tie");
    }
    else if (playerChoice === "paper" && computerChoice === "paper")
    {
        console.log("Tie");
    }
    else if (playerChoice === "scissors" && computerChoice === "scissors")
    {
        console.log("Tie");
    }
    else if (playerChoice === "rock" && computerChoice === "paper")
    {
        console.log("Lose");
    }
    else if (playerChoice === "rock" && computerChoice === "scissors")
    {
        console.log("Win");
    }
    else if (playerChoice === "paper" && getComputerChoice === "rock")
    {
        console.log("Win");
    }
    else if (playerChoice === "paper" && computerChoice === "scissors")
    {
        console.log("Lose");
    }
    else if (playerChoice === "scissors" && computerChoice === "rock")
    {
        console.log("Lose");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper")
    {
        console.log("Win");
    }

    gameLoop += 1;
    console.log(gameLoop);
}

function getPlayerChoice()
{
    let playerChoice = (prompt("Choose your weapon: "));
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function getComputerChoice()
{
    let strComputerChoice = "";
    let computerChoice =  Math.floor(Math.random() * 3);
    //Outputs 0, 1, or 2
    if (computerChoice === 0)
    {
        strComputerChoice = "rock";
    }
    else if (computerChoice === 1)
    {
        strComputerChoice = "paper";
    }
    else
    {
        strComputerChoice = "scissors";
    }

    return strComputerChoice;
}