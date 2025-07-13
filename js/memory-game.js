const icons = ['🍎','🍌','🍒','🍇','🍉','🍋'];
let cards = [];
let flippedCards = [];
let attempts = 0;

function setupGame() {
    cards = [...icons, ...icons].sort(() => 0.5 - Math.random());
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;

    cards.forEach((icon, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.dataset.index = index;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.icon;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
        attempts++;
        document.getElementById('attempts').textContent = attempts;
        checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        flippedCards = [];
    } else {
        setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
        flippedCards = [];
        }, 1000);
    }
}

function resetGame() {
    setupGame();
}

setupGame();
