let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let inGame = true;
let message = "";

function startGame() {
    if (sum < 21) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack= true;
    } else {
        message = "You're out of the game!";
        inGame = false;
    }

    console.log(message)
}