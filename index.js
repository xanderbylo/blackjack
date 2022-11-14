let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let inGame = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for ( i = 0 ; i < cards.length ; i++ ) {
        cardsEl.textContent += " " + cards[i];
    }

    sumEl.textContent = "Sum: " + sum;
    
    if (sum < 21) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack= true;
    } else {
        message = "You're out of the game!";
        inGame = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    
    renderGame();
}