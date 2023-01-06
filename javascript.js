const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const Results = document.querySelector('#results');

let plyrScore = 0;
let CPUScore = 0;

const playRound = (plyrChoice, CPUChoice) => {

    if (plyrChoice === CPUChoice)
    {
        const p = document.createElement('p');
        p.innerText = 'You tied, you both chose ' + plyrChoice + '.';
        Results.appendChild(p);
    }
    else if (plyrChoice === "rock" && CPUChoice === "paper")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' lost to ' + CPUChoice + '.';
        Results.appendChild(p);
        CPUScore++;
        console.log(plyrScore, CPUScore);
    }
    else if (plyrChoice === "rock" && CPUChoice === "scissors")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' won against ' + CPUChoice + '.';
        Results.appendChild(p);
        plyrScore++;
    }
    else if (plyrChoice === "paper" && CPUChoice === "rock")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' won against ' + CPUChoice + '.';
        Results.appendChild(p);
        plyrScore++;
    }
    else if (plyrChoice === "paper" && CPUChoice === "scissors")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' lost to ' + CPUChoice + '.';
        Results.appendChild(p);
        CPUScore++;
    }
    else if (plyrChoice === "scissors" && CPUChoice === "rock")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' lost to ' + CPUChoice + '.';
        Results.appendChild(p);
        CPUScore++;
    }
    else if (plyrChoice === "scissors" && CPUChoice === "paper")
    {
        const p = document.createElement('p');
        p.innerText = 'Your ' + plyrChoice + ' won against ' + CPUChoice + '.';
        Results.appendChild(p);
        plyrScore++;
    }
}

const checkForWinner = (plyrScore, CPUScore) => {
    if (plyrScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = 'You won with a score of ' + plyrScore + ' against the AIs ' + CPUScore + '.';
        Results.append(h2);
        plyrScore = 0;
        CPUScore = 0;
    }
    else if(CPUScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = 'You lost with a score of ' + plyrScore + ' against the AIs ' + CPUScore + '.';
        Results.append(h2);
        plyrScore = 0;
        CPUScore = 0;
    }
}

rockBtn.addEventListener('click', () => {
    const CPUChoice = getComputerChoice()
    const plyrChoice = 'rock'
    playRound(plyrChoice, CPUChoice)
    checkForWinner(plyrScore, CPUScore)
})

paperBtn.addEventListener('click', () => {
    const CPUChoice = getComputerChoice()
    const plyrChoice = 'paper'
    playRound(plyrChoice, CPUChoice)
    checkForWinner(plyrScore, CPUScore)
})

scissorsBtn.addEventListener('click', () =>{
    const CPUChoice = getComputerChoice()
    const plyrChoice = 'scissors'
    playRound(plyrChoice, CPUChoice)
    checkForWinner(plyrScore, CPUScore)
})

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