let secretNumber = Math.floor(Math.random() * 100) + 1; // من 1 ل 100
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById('guessInput').value);
    const messageEl = document.getElementById('message');
    attempts++;

    if (!guess || guess < 1 || guess > 100) {
        messageEl.textContent = '⛔ Please enter a number between 1 and 100.';
        attempts--; // لو دخل رقم غلط ما نزودش attempts
    } else if (guess === secretNumber) {
        messageEl.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    } else if (guess < secretNumber) {
        messageEl.textContent = '🔻 Too low! Try again.';
    } else if (guess > secretNumber) {
        messageEl.textContent = '🔺 Too high! Try again.';
    }

    document.getElementById('attempts').textContent = attempts;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('message').textContent = "Let's start! 🎲";
}
