let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let inGame = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
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
    console.log("Drawing a new card from the deck!")
}