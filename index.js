let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

function startGame() {
    if (sum < 21) {
        console.log("Would you like to draw another card?");
    } else if (sum === 21) {
        console.log("You've got Blackjack!");
    } else {
        console.log("You're out of the game!");
    }
}