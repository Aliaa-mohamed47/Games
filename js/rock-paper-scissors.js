let playerScore = 0;
let robotScore = 0;

const icons = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const robotChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerChoice').textContent = `${playerChoice} ${icons[playerChoice]}`;
    document.getElementById('robotChoice').textContent = `${robotChoice} ${icons[robotChoice]}`;

    document.getElementById('playerImg').src = './images/woman.png';
    document.getElementById('robotImg').src = './images/robot.png';

    if (playerChoice === robotChoice) {
    } else if (
        (playerChoice === 'rock' && robotChoice === 'scissors') ||
        (playerChoice === 'paper' && robotChoice === 'rock') ||
        (playerChoice === 'scissors' && robotChoice === 'paper')
    ) {
        playerScore++;
    } else {
        robotScore++;
    }

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('robotScore').textContent = robotScore;
}
