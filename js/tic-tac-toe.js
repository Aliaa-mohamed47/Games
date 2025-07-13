const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');

let currentPlayer = 'X';
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

let scoreX = 0;
let scoreO = 0;

const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
    ];

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    resetBtn.addEventListener('click', resetGame);

    function handleClick(e) {
    const index = e.target.dataset.index;
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = `Player ${currentPlayer} wins! 🎉`;

        if (currentPlayer === 'X') {
        scoreX++;
        scoreXEl.textContent = scoreX;
        } else {
        scoreO++;
        scoreOEl.textContent = scoreO;
        }

        gameActive = false;

        setTimeout(resetGame, 1000);
    } else if (!board.includes("")) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
        setTimeout(resetGame, 1000);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    board = ["", "", "", "", "", "", "", "", ""];

    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
}

const resetScoreBtn = document.getElementById('resetScoreBtn');

resetScoreBtn.addEventListener('click', resetScore);

function resetScore() {
    scoreX = 0;
    scoreO = 0;
    scoreXEl.textContent = scoreX;
    scoreOEl.textContent = scoreO;
}

